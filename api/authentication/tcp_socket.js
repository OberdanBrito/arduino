const net   = require("net");
const configs = require("./configs");


module.exports = {
    server:null,
    onerror:null,
    create: handler =>
    {
        if(!handler && this.onerror) this.onerror("Missing handler");
        if(!handler && !this.onerror) throw new Error("Missing handler");

        this.server = net.createServer(handler);

        if(this.onerror) this.server.on("error", this.onerror);
    },
    listen: configurations => 
    {
        this.server.listen({
            host: configs.host,
            port: configs.port,
            exclusive: configs.exclusive
          }, () => 
          {
              console.log(`Host:${configs.host}\nPort:${configs.port}\n`);
          })
    }
}