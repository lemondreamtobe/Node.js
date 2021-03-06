/* This code is PUBLIC DOMAIN, and is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND. See the accompanying 
 * LICENSE file.
 */

#include <v8.h>
#include <node.h>

#include <unistd.h>

using namespace node;
using namespace v8;

#define REQ_FUN_ARG(I, VAR)                                             \
  if (args.Length() <= (I) || !args[I]->IsFunction())                   \
    return ThrowException(Exception::TypeError(                         \
                  String::New("Argument " #I " must be a function")));  \
  Local<Function> VAR = Local<Function>::Cast(args[I]);

class SendMsgEio: ObjectWrap
{
private:
  int m_count;
public:

  static Persistent<FunctionTemplate> s_ct;
  static void Init(Handle<Object> target)
  {
    HandleScope scope;

    Local<FunctionTemplate> t = FunctionTemplate::New(New);

    s_ct = Persistent<FunctionTemplate>::New(t);
    s_ct->InstanceTemplate()->SetInternalFieldCount(1);
    s_ct->SetClassName(String::NewSymbol("SendMsgEio"));

    NODE_SET_PROTOTYPE_METHOD(s_ct, "sendMsg", SendMsg);

    target->Set(String::NewSymbol("SendMsgEio"),
                s_ct->GetFunction());
  }

  SendMsgEio() :
    m_count(0)
  {
  }

  ~SendMsgEio()
  {
  }

  static Handle<Value> New(const Arguments& args)
  {
    HandleScope scope;
    SendMsgEio* hw = new SendMsgEio();
    hw->Wrap(args.This());
    return args.This();
  }

  struct hello_baton_t {
    SendMsgEio *hw;
    int increment_by;
    int sleep_for;
    Persistent<Function> cb;
  };

  static Handle<Value> SendMsg(const Arguments& args)
  {
    HandleScope scope;

    REQ_FUN_ARG(0, cb);

    SendMsgEio* hw = ObjectWrap::Unwrap<SendMsgEio>(args.This());

    hello_baton_t *baton = new hello_baton_t();
    baton->hw = hw;
    baton->increment_by = 2;
    baton->sleep_for = 1;
    baton->cb = Persistent<Function>::New(cb);

    hw->Ref();

    eio_custom(EIO_Hello, EIO_PRI_DEFAULT, EIO_AfterHello, baton);
    ev_ref(EV_DEFAULT_UC);

    return Undefined();
  }


  static int EIO_Hello(eio_req *req)
  {
    hello_baton_t *baton = static_cast<hello_baton_t *>(req->data);

    sleep(baton->sleep_for);

    baton->hw->m_count += baton->increment_by;

    return 0;
  }

  static int EIO_AfterHello(eio_req *req)
  {
    HandleScope scope;
    hello_baton_t *baton = static_cast<hello_baton_t *>(req->data);
    ev_unref(EV_DEFAULT_UC);
    baton->hw->Unref();

    Local<Value> argv[1];

    argv[0] = String::New("ok");

    TryCatch try_catch;

    baton->cb->Call(Context::GetCurrent()->Global(), 1, argv);

    if (try_catch.HasCaught()) {
      FatalException(try_catch);
    }

    baton->cb.Dispose();

    delete baton;
    return 0;
  }

};

Persistent<FunctionTemplate> SendMsgEio::s_ct;
extern "C" {
  static void init (Handle<Object> target)
  {
    SendMsgEio::Init(target);
  }

  NODE_MODULE(sendmsg_eio, init);
}
