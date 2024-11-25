(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{373:function(t,v,_){"use strict";_.r(v);var e=_(8),l=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"http-请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-请求"}},[t._v("#")]),t._v(" HTTP 请求")]),t._v(" "),v("p",[v("img",{attrs:{src:"/blog/images/javascript/http%E8%AF%B7%E6%B1%82%E6%96%B9%E6%B3%951.png",alt:"http请求1"}})]),t._v(" "),v("h3",{attrs:{id:"get"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" GET")]),t._v(" "),v("p",[t._v("GET 请求指定资源的表示。请求使用GET只应检索数据。")]),t._v(" "),v("h3",{attrs:{id:"post"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#post"}},[t._v("#")]),t._v(" POST")]),t._v(" "),v("p",[t._v("POST 将数据发送到服务器。请求主体的类型由 Content-Type 标头指示。")]),t._v(" "),v("h3",{attrs:{id:"put"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#put"}},[t._v("#")]),t._v(" PUT")]),t._v(" "),v("p",[t._v("PUT 请求方法创建新的资源或替换请求负载目标资源的表示。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("POST 与 PUT 区别")]),t._v(" "),v("p",[t._v("PUT 是幂等的：调用它一次或多次连续具有相同的效果（也就是没有侧面的效果）。PUT 是将客户端的资源放在请求 URI 上。对于服务器到底是创建还是更新，由服务器返回的 HTTP Code 来区别。如果用 PUT 来达到更改资源，需要客户端提交资源全部信息，如果只有部分信息，不应该使用 PUT（因为服务器使用客户端提交的对象整体替换服务器的资源）")])]),t._v(" "),v("h3",{attrs:{id:"delete"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[t._v("#")]),t._v(" DELETE")]),t._v(" "),v("p",[t._v("DELETE 请求方法删除指定的资源。")]),t._v(" "),v("h3",{attrs:{id:"options"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" OPTIONS")]),t._v(" "),v("p",[t._v("OPTIONS 用于描述目标资源的通讯选择。客户端可以为 OPTIONS 方法指定一个特定的 URL，或者指定一个星号（*）来引用整个服务器。可以使用 OPTIONS 方法对服务器发起请求，以检测服务器支持哪些 HTTP 方法。")]),t._v(" "),v("p",[t._v("在 CORS 中，可以使用 OPTIONS 方法发起一个预检请求，以检测实际请求是否可以被服务器所接受。预检请求报文中的 "),v("code",[t._v("Access-Control-Request-Method")]),t._v(" 首部字段告知服务器实际请求所使用的 HTTP 方法；"),v("code",[t._v("Access-Control-Request-Headers")]),t._v(" 首部字段告知服务器实际请求所携带的自定义首部字段。服务器基于从预检请求获得的信息来判断，是否接受接下来的实际请求。服务器所返回的 "),v("code",[t._v("Access-Control-Allow-Methods")]),t._v(" 首部字段将所有允许的请求方法告知客户端。该首部字段与 "),v("code",[t._v("Allow")]),t._v(" 类似，但只能用于涉及到 CORS 的场景中。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("什么是 OPTIONS")]),t._v(" "),v("p",[t._v('是浏览器对复杂跨域请求的一种处理方式，在真正发送请求之前，会先进行一次预检请求，就是我们刚刚说到的参数为 OPTIONS 的第一次请求，作用是用于试探服务端是否能接受真正的请求。服务器确认允许之后，才发起实际的 HTTP 请求。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 Cookies 和 HTTP 认证等相关数据）。如果 OPTIONS 获得的回应时拒绝性质的，如 404、403、500 等状态，就会停止 post、get 请求的发出。针对非简单请求的 CORS 请求，会在正式通信之前，额外增加一次 HTTP 请求，称为"预检"请求（preflight），以获知服务器是否允许该实际请求，避免跨域请求对服务器产生未预期的影响。非简单请求产生条件如下：')]),t._v(" "),v("ul",[v("li",[t._v("请求的方法不是 GET/HEAD/POST")]),t._v(" "),v("li",[t._v("POST 请求的 Content-Type 并非 application/x-www-form-urlencoded, multipart/form-data, 或text/plain")]),t._v(" "),v("li",[t._v("请求设置了自定义的 header 字段")])]),t._v(" "),v("p",[t._v("满足非简单请求就需要先进性 OPTIONS 预检请求，第二次才是真实的请求。很明显，如果我们不进行优化处理，只要是非简单请求，每一次都会出现先发一次 OPTIONS 预请求，然后才是真实请求，这样明显是不合理的。优化方案如下：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("全部用简单请求")]),t._v("：大多数的场景都是非简单请求，这种方案行不通。")]),t._v(" "),v("li",[v("strong",[t._v("Access-Control-Max-Age")]),t._v("：表示 Access-Control-Allow-Methods / Access-Control-Allow-Headers 可以被缓存多久，单位为秒。在 Access-Control-Max-Age 有效期内直接请求而不用再询问服务器否可以跨源了，即不再 OPTIONS 请求。")])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("方法")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("成功是否有身体")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("是否安全")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("是否幂等")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("是否可缓存")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("在表单中是否允许")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("GET")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("POST")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("新鲜度")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("PUT")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("DELETE")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("否")])])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("幂等与安全")]),t._v(" "),v("p",[v("strong",[t._v("安全")]),t._v("： 就是不会出现 "),v("strong",[t._v("脏读")]),t._v("，"),v("strong",[t._v("幻读")]),t._v("，"),v("strong",[t._v("不可重复读")]),t._v("。这里的安全和通常所理解的安全意义不同，就好比如果一个请求的语义本质上就是获取数据（只读），那么这个请求就是安全的。"),v("strong",[t._v("客户端向服务器发起的请求如果没有引起服务器端任何的状态变化")]),t._v("，那么他就是安全的而 post 请求来提交数据必然会是服务器发生相应的变化。从这个维度来看，get请求相对服务器而言，是安全的，post则不安全的。")]),t._v(" "),v("p",[v("strong",[t._v("幂等")]),t._v("： 就是在操作成功的前提条件下，不会对数据库造成额外的影响。通俗的来讲就是"),v("strong",[t._v("指同一个请求执行多次和仅执行一次的效果完全相等就是幂等的")]),t._v("。幂等主要是"),v("strong",[t._v("为了处理同一个请求重复发送的情况，重复请求会不会发生无法预知的后果")]),t._v("，假如在请求响应之前失去连接，如果这个请求是幂等的，那么就可以放心的重发一次请求。所以可以得出 get 请求是幂等的，可以重复发送请求，post 请求是不幂等的，重复请求可能会发生无法预知的后果。")])]),t._v(" "),v("h3",{attrs:{id:"简单请求与非简单请求-复杂请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单请求与非简单请求-复杂请求"}},[t._v("#")]),t._v(" 简单请求与非简单请求(复杂请求)")]),t._v(" "),v("p",[v("img",{attrs:{src:"/blog/images/javascript/http%E8%AF%B7%E6%B1%82%E6%96%B9%E6%B3%952.png",alt:"http请求2"}})]),t._v(" "),v("p",[v("strong",[t._v("简单请求")]),t._v(" 就是会直接发送请求，而复杂请求则会在发送真正的请求之前发一次 OPTIONS 预检请求，来试探服务器是否能够接收真正的请求，MDN 对 OPTIONS 预检请求的释义为检测服务器所支持的请求方法。")]),t._v(" "),v("p",[v("strong",[t._v("简单请求")]),t._v(" 符合如下两个条件：")]),t._v(" "),v("ul",[v("li",[t._v("请求方式：GET、POST、HEAD，即HTTP1.0提供的三种请求方法")]),t._v(" "),v("li",[t._v("HTTP 头部信息不超过一下几种字段：无自定义头部字段、Accept、Accept-Language、Content-Language、Last-Event-ID、Content-Type（只有三个值application/x-www-form-urlencoded、multipart/form-data、text/plain）")])]),t._v(" "),v("p",[v("strong",[t._v("复杂请求")]),t._v(" 则符合如下几个条件之一：")]),t._v(" "),v("ul",[v("li",[t._v("请求方式：PUT、DELETE")]),t._v(" "),v("li",[t._v("自定义头部字段")]),t._v(" "),v("li",[t._v("发送 json 格式数据")])]),t._v(" "),v("h3",{attrs:{id:"get-和-post-的联系和区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post-的联系和区别"}},[t._v("#")]),t._v(" GET 和 POST 的联系和区别")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("区别")]),t._v(" "),v("th",[t._v("GET")]),t._v(" "),v("th",[t._v("POST")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("传输长度")]),t._v(" "),v("td",[t._v("长度限制（受限于url长度），一般2KB")]),t._v(" "),v("td",[t._v("post无限制")])]),t._v(" "),v("tr",[v("td",[t._v("传输方式")]),t._v(" "),v("td",[t._v("地址栏传输")]),t._v(" "),v("td",[t._v("报文传输")])]),t._v(" "),v("tr",[v("td",[t._v("用途")]),t._v(" "),v("td",[t._v("查询")]),t._v(" "),v("td",[t._v("增删改数据")])]),t._v(" "),v("tr",[v("td",[t._v("数据包数量")]),t._v(" "),v("td",[t._v("一个TCP数据包 (http header 和 data一并发送出去)")]),t._v(" "),v("td",[t._v("两个TCP数据包 (浏览器先发送 header，服务器响应 100 continue，浏览器再发送 data，服务器响应 200 ok 返回数据，所以时间上消耗的要多一点")])]),t._v(" "),v("tr",[v("td",[t._v("安全性 (此处的安全性与安全与幂等中的安全不同)")]),t._v(" "),v("td",[t._v("不安全 (参数直接暴露在URL上，所以不能用来传递敏感信息)")]),t._v(" "),v("td",[t._v("相对于 get 安全")])]),t._v(" "),v("tr",[v("td",[t._v("回退")]),t._v(" "),v("td",[t._v("在浏览器回退时是无害的")]),t._v(" "),v("td",[t._v("POST会再次提交请求")])]),t._v(" "),v("tr",[v("td",[t._v("缓存")]),t._v(" "),v("td",[t._v("会被浏览器主动缓存")]),t._v(" "),v("td",[t._v("不会被主动缓存")])]),t._v(" "),v("tr",[v("td",[t._v("历史记录")]),t._v(" "),v("td",[t._v("会被完整保留在浏览器历史记录里")]),t._v(" "),v("td",[t._v("不会保留")])]),t._v(" "),v("tr",[v("td",[t._v("参数类型")]),t._v(" "),v("td",[t._v("只接受ASCII字符")]),t._v(" "),v("td",[t._v("无限制")])]),t._v(" "),v("tr",[v("td",[t._v("编码")]),t._v(" "),v("td",[t._v("只能URL编码")]),t._v(" "),v("td",[t._v("POST支持多种编码方式")])])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),v("ul",[v("li",[t._v("并不是所有浏览器都会在 POST 中发送两次包，Firefox 就只发送一次。")]),t._v(" "),v("li",[t._v("HTTP 的底层是 TCP/IP。所以 GET 和 POST 的底层也是 TCP/IP，也就是说，GET/POST 都是 TCP 链接。GET 和 POST 能做的事情是一样一样的。你要给 GET 加上request body，给 POST 带上 url 参数，技术上是完全行的通的。但是根据 "),v("strong",[t._v("GET 和 POST 的联系和区别")]),t._v("，GET 传输长度有限制，通过地址栏传输，相对不安全，只能只能 URL 编码,只接受 ASCII 字符的参数类型等，再加上大多数服务器最多处理 64K 大小的 url，数据量太大对浏览器和服务器都是很大负担。如果你用 GET 服务，在 request body 放数据，不同服务器的处理方式也是不同的，有些服务器会帮你处理，读出数据，有些服务器直接忽略，所以，虽然 GET 可以带 request body，也不能保证一定能被接收到。所以 GET 和 POST 本质上就是 TCP 链接，并无差别。但是由于 HTTP 的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同。GET 与 POST 都有自己的语义，不能随便混用。")])])]),t._v(" "),v("h2",{attrs:{id:"restful-风格"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#restful-风格"}},[t._v("#")]),t._v(" RESTful 风格")]),t._v(" "),v("p",[t._v("表现层状态转化。")]),t._v(" "),v("p",[t._v('HTTP协议，是一个无状态协议。这意味着，所有的状态都保存在服务器端。因此，如果客户端想要操作服务器，必须通过某种手段，让服务器端发生"状态转化"（State Transfer）。而这种转化是建立在表现层之上的，所以就是"表现层状态转化"。')]),t._v(" "),v("p",[t._v('在 RESTful 架构中，每个网址代表一种资源（resource），所以网址中不能有动词，只能有名词，而且所用的名词往往与数据库的表格名对应。一般来说，数据库中的表都是同种记录的"集合"（collection），所以 API 中的名词也应该使用复数。')]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("什么是 RESTful 架构：")]),t._v(" "),v("ul",[v("li",[t._v("每一个URI代表一种资源")]),t._v(" "),v("li",[t._v("客户端和服务器之间，传递这种资源的某种表现层")]),t._v(" "),v("li",[t._v('客户端通过四个HTTP动词，对服务器端资源进行操作，实现"表现层状态转化"')])])]),t._v(" "),v("h3",{attrs:{id:"restful-常用-http-动词"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#restful-常用-http-动词"}},[t._v("#")]),t._v(" RESTful 常用 HTTP 动词")]),t._v(" "),v("ul",[v("li",[t._v("GET（SELECT）：从服务器取出资源（一项或多项）。")]),t._v(" "),v("li",[t._v("POST（CREATE）：在服务器新建一个资源。")]),t._v(" "),v("li",[t._v("PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。")]),t._v(" "),v("li",[t._v("PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。")]),t._v(" "),v("li",[t._v("DELETE（DELETE）：从服务器删除资源。")]),t._v(" "),v("li",[t._v("HEAD：获取资源的元数据。")]),t._v(" "),v("li",[t._v("OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。")])]),t._v(" "),v("h3",{attrs:{id:"restful-常见-状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#restful-常见-状态码"}},[t._v("#")]),t._v(" RESTful 常见 状态码")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）。")])]),t._v(" "),v("li",[v("p",[t._v("201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。")])]),t._v(" "),v("li",[v("p",[t._v("202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）")])]),t._v(" "),v("li",[v("p",[t._v("204 NO CONTENT - [DELETE]：用户删除数据成功。")])]),t._v(" "),v("li",[v("p",[t._v("400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的。")])]),t._v(" "),v("li",[v("p",[t._v("401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。")])]),t._v(" "),v("li",[v("p",[t._v("403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。")])]),t._v(" "),v("li",[v("p",[t._v("404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。")])]),t._v(" "),v("li",[v("p",[t._v("406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。")])]),t._v(" "),v("li",[v("p",[t._v("410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。")])]),t._v(" "),v("li",[v("p",[t._v("422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。")])]),t._v(" "),v("li",[v("p",[t._v("500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。")])])]),t._v(" "),v("h3",{attrs:{id:"返回结果"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#返回结果"}},[t._v("#")]),t._v(" 返回结果")]),t._v(" "),v("ul",[v("li",[t._v("GET /collection：返回资源对象的列表（数组）")]),t._v(" "),v("li",[t._v("GET /collection/resource：返回单个资源对象")]),t._v(" "),v("li",[t._v("POST /collection：返回新生成的资源对象")]),t._v(" "),v("li",[t._v("PUT /collection/resource：返回完整的资源对象")]),t._v(" "),v("li",[t._v("PATCH /collection/resource：返回完整的资源对象")]),t._v(" "),v("li",[t._v("DELETE /collection/resource：返回一个空文档")])]),t._v(" "),v("h2",{attrs:{id:"graphql"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#graphql"}},[t._v("#")]),t._v(" GraphQL")]),t._v(" "),v("p",[t._v("GraphQL 是一种面向数据的 API 查询风格。GraphQL 规范，让前端自己描述自己希望的数据形式，服务端则返回前端所描述的数据结构。GraphQL 既是一种用于 API 的查询语言也是一个满足你数据查询的运行时。 GraphQL 对你的 API 中的数据提供了一套易于理解的完整描述，使得客户端能够准确地获得它需要的数据，而且没有任何冗余，也让 API 更容易地随着时间推移而演进，还能用于构建强大的开发者工具。")]),t._v(" "),v("ul",[v("li",[t._v("多终端的出现，APP、小程序、PC端都需要相同的接口，但是又略有差异，常规接口需要提供几套，GraphQL 的话只需要写好查询语句即可")]),t._v(" "),v("li",[t._v("天生的聚合接口，以前一个页面需要请求不同的数据，我们可以请求多个接口，我们可以让服务端进行聚合，有了 GraphQL 后我们可以自己去聚合想要的数据")]),t._v(" "),v("li",[t._v("不用被版本困扰，之前写接口的时候为了兼容老的项目可以正常被访问，尤其是 APP，线上的项目，我们接口肯定是不能影响线上的，所以有比较大的改变的时候，只能升级版本，有了 GraphQL 后就无需关心版本问题了，接口还是那个接口查询语句变一下就好了")]),t._v(" "),v("li",[t._v("迁移很简单，服务端在之前的接口上稍加改造就好，前端写查询语句")])]),t._v(" "),v("p",[t._v("与 RESTful API 比较：")]),t._v(" "),v("ol",[v("li",[v("p",[v("strong",[t._v("数据获取方式")])]),t._v(" "),v("ul",[v("li",[t._v("RESTful API：通常采用固定的资源路径和HTTP动词来定义对资源的操作。客户端需要预先知道资源的URL和可用的HTTP动词，然后发送请求以获取所需的数据。这种方式可能导致过度获取或欠获取问题，因为客户端无法精确地指定所需的数据字段。")]),t._v(" "),v("li",[t._v("GraphQL：API允许客户端在请求中指定所需的数据字段，服务器则返回与这些字段匹配的数据。这种按需获取数据的方式使GraphQL具有更高的灵活性和效率。")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("架构模式")])]),t._v(" "),v("ul",[v("li",[t._v("RESTful API：通常遵循客户端-服务器架构模式，客户端发送请求到服务器，服务器处理请求并返回响应。这种模式在大多数情况下都能满足需求，但在某些复杂场景下可能存在局限性。")]),t._v(" "),v("li",[t._v("GraphQL：采用了一种更为灵活的架构模式，即图模式（Graph Schema）。它允许客户端在请求中指定多个相关的数据字段，服务器则通过图模式中的关联关系来查询和返回这些数据。这种架构模式使得GraphQL在处理复杂数据关联和嵌套关系时更加得心应手。")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("缓存策略")])]),t._v(" "),v("ul",[v("li",[t._v("RESTful API：通常利用HTTP缓存机制来提高性能。客户端可以通过缓存响应结果来减少对服务器的请求次数，从而降低网络延迟和服务器负载。然而，由于RESTful API的数据获取方式较为固定，缓存策略可能难以适应所有场景。")]),t._v(" "),v("li",[t._v("GraphQL：在缓存策略方面更加灵活。由于客户端可以按需获取数据，因此可以根据实际需求来定制缓存策略。例如，客户端可以缓存某个数据字段的结果，并在后续请求中重复使用，从而减少对服务器的请求次数。")])])])]),t._v(" "),v("p",[t._v("GraphQL 的缺点：")]),t._v(" "),v("ol",[v("li",[v("p",[v("strong",[t._v("实现复杂性")])]),t._v(" "),v("ul",[v("li",[t._v("GraphQL需要额外的挑战和专业知识来实现。与传统的REST API相比，GraphQL将数据查询的大部分工作转移到服务器端，增加了服务器开发人员工作的复杂度。")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("缓存策略复杂")])]),t._v(" "),v("ul",[v("li",[t._v("GraphQL的缓存策略比REST更复杂。由于客户端可以自定义其需要的字段，即使它操作的是同一个实体，每次查询可能都各不相同，这使得缓存变得困难。")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("N+1查询问题")])]),t._v(" "),v("ul",[v("li",[t._v("在实现GraphQL服务端接口时，容易引起效率极差的代码，导致“N+1问题”。即对于涉及子查询的接口，可能产生过多的数据库访问，造成性能问题。")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("安全性和授权问题")])]),t._v(" "),v("ul",[v("li",[t._v("GraphQL作为单路由API接口在查询过程中可能会忽略一些鉴权问题，这可能导致越权漏洞的出现，并且泄露敏感信息。")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("限流难题")])]),t._v(" "),v("ul",[v("li",[t._v("GraphQL的限流问题比较难解决。服务端不可能没有限流，不然服务器稳定性就保障不了。对于REST来说接口的路由都是固定不变的，针对于不同的URI做限流是很容易做到的。但是GraphQL限流的难点在于客户端只发起一次请求，在服务器端可能被放大无数倍。")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("查询的不可预测性")])]),t._v(" "),v("ul",[v("li",[t._v("GraphQL的执行是不可预测的，因为GraphQL太过于灵活。客户端可以发出非常复杂和深度嵌套的查询，这对服务器来说可能是一个负担，尤其是当查询没有得到适当限制时。")])])])])])}),[],!1,null,null,null);v.default=l.exports}}]);