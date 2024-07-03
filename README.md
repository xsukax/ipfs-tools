# xsukax IPFS Tools
Simple HTML CSS JS code to help IPFS Users to View &amp; Download Files From Different Gateways.<br />
Check Demo: https://ipfs.xsukax.com

### To build image using Dockerfile, follow these steps:
1- Clone ipfs-tools project
```sh
git clone https://github.com/xsukax/ipfs-tools.git
```
```sh
cd ipfs-tools
```
2- Build nginx alpine image
```sh
sudo docker build -t xsukax-ipfs .
```
3- Create a Container
```sh
sudo docker run -d -p 8098:80 --name xsukax-ipfs xsukax-ipfs:latest
```
4- Check localhost url<br/>
http://localhost:8098
### You can download docker image directly & run container:
```sh
sudo docker run -d -p 8098:80 --restart unless-stopped --name xsukax-ipfs xsukax/ipfs-tools:1.0
```
Check localhost url<br/>
http://localhost:8098

### Image link on Docker Hub<br/>
https://hub.docker.com/r/xsukax/ipfs-tools
