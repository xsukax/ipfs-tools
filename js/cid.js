function displayMessage() {
   let params = new URLSearchParams(document.location.search);
   let cidd = params.get("cid");

   if (cidd) {
      document.getElementById("showinputhere").innerHTML = '\
	  <div id="content">\
   <div id="content-header" class="d-flex flex-wrap">\
      <div>\
         <strong> <a href="index.html">Home</a> </strong> \
         <div class="ipfs-hash" translate="no"> CID Viewer & File Downloader: </div>\
      </div>\
      <div class="no-linebreak flex-shrink-1 ml-auto"> </div>\
   </div>\
   <div class="table-responsive">\
      <table>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <b>Cid Gateways</b> </td>\
            <td></td>\
            <td></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <a href="https://ipfs.io/ipfs/' + cidd + '">ipfs.io</a> </td>\
            <td class="no-linebreak"> <a class="ipfs-hash" translate="no" href="https://ipfs.io/ipfs/' + cidd + '"> https://ipfs.io/ipfs/' + cidd + ' </a> </td>\
            <td></td>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <a href="https://gateway.ipfs.io/ipfs/' + cidd + '">gateway.ipfs.io</a> </td>\
            <td class="no-linebreak"> <a class="ipfs-hash" translate="no" href="https://gateway.ipfs.io/ipfs/' + cidd + '"> https://gateway.ipfs.io/ipfs/' + cidd + ' </a> </td>\
            <td></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <a href="https://cloudflare-ipfs.com/ipfs/' + cidd + '">cloudflare-ipfs.com</a> </td>\
            <td class="no-linebreak"> <a class="ipfs-hash" translate="no" href="https://cloudflare-ipfs.com/ipfs/' + cidd + '"> https://cloudflare-ipfs.com/ipfs/' + cidd + ' </a> </td>\
            <td></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <a href="https://cf-ipfs.com/ipfs/' + cidd + '">cf-ipfs.com</a> </td>\
            <td class="no-linebreak"> <a class="ipfs-hash" translate="no" href="https://cf-ipfs.com/ipfs/' + cidd + '"> https://cf-ipfs.com/ipfs/' + cidd + ' </a> </td>\
            <td></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <a href="https://dweb.link/ipfs/' + cidd + '">dweb.link</a> </td>\
            <td class="no-linebreak"> <a class="ipfs-hash" translate="no" href="https://dweb.link/ipfs/' + cidd + '"> https://dweb.link/ipfs/' + cidd + ' </a> </td>\
            <td></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <a href="https://w3s.link/ipfs/' + cidd + '">w3s.link</a> </td>\
            <td class="no-linebreak"> <a class="ipfs-hash" translate="no" href="https://w3s.link/ipfs/' + cidd + '"> https://w3s.link/ipfs/' + cidd + ' </a> </td>\
            <td></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <a href="https://gateway.pinata.cloud/ipfs/' + cidd + '">gateway.pinata.cloud</a> </td>\
            <td class="no-linebreak"> <a class="ipfs-hash" translate="no" href="https://gateway.pinata.cloud/ipfs/' + cidd + '"> https://gateway.pinata.cloud/ipfs/' + cidd + ' </a> </td>\
            <td></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <a href="https://crustwebsites.net/ipfs/' + cidd + '">crustwebsites.net</a> </td>\
            <td class="no-linebreak"> <a class="ipfs-hash" translate="no" href="https://crustwebsites.net/ipfs/' + cidd + '"> https://crustwebsites.net/ipfs/' + cidd + ' </a> </td>\
            <td></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <a href="https://ipfs.eth.aragon.network/ipfs/' + cidd + '">ipfs.eth.aragon.network</a> </td>\
            <td class="no-linebreak"> <a class="ipfs-hash" translate="no" href="https://ipfs.eth.aragon.network/ipfs/' + cidd + '"> https://ipfs.eth.aragon.network/ipfs/' + cidd + ' </a> </td>\
            <td></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <a href="https://4everland.io/ipfs/' + cidd + '">4everland.io</a> </td>\
            <td class="no-linebreak"> <a class="ipfs-hash" translate="no" href="https://4everland.io/ipfs/' + cidd + '"> https://4everland.io/ipfs/' + cidd + ' </a> </td>\
            <td></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <a href="https://ipfs.fleek.co/ipfs/' + cidd + '">ipfs.fleek.co</a> </td>\
            <td class="no-linebreak"> <a class="ipfs-hash" translate="no" href="https://ipfs.fleek.co/ipfs/' + cidd + '"> https://ipfs.fleek.co/ipfs/' + cidd + ' </a> </td>\
            <td></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <a href="https://nftstorage.link/ipfs/' + cidd + '">nftstorage.link</a> </td>\
            <td class="no-linebreak"> <a class="ipfs-hash" translate="no" href="https://nftstorage.link/ipfs/' + cidd + '"> https://nftstorage.link/ipfs/' + cidd + ' </a> </td>\
            <td></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <b>Cid Analysis</b> </td>\
            <td></td>\
            <td></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <a href="https://cid.ipfs.tech/#' + cidd + '">cid.ipfs.tech</a> </td>\
            <td class="no-linebreak"> <a class="ipfs-hash" translate="no" href="https://cid.ipfs.tech/#' + cidd + '"> https://cid.ipfs.tech/#' + cidd + ' </a> </td>\
            <td></td>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <a href="https://explore.ipld.io/#/explore/' + cidd + '">explore.ipld.io</a> </td>\
            <td class="no-linebreak"> <a class="ipfs-hash" translate="no" href="https://explore.ipld.io/#/explore/' + cidd + '"> https://explore.ipld.io/#/explore/' + cidd + ' </a> </td>\
            <td></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <b>Cid Video Viewer</b> </td>\
            <td></td>\
            <td></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <a href="https://ipfs.video/ipfs/' + cidd + '">ipfs.video</a> </td>\
            <td class="no-linebreak"> <a class="ipfs-hash" translate="no" href="https://ipfs.video/ipfs/' + cidd + '"> https://ipfs.video/ipfs/' + cidd + ' </a> </td>\
            <td></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> <b>Donate</b> </td>\
            <td></td>\
            <td></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> Bitcoin (BTC) </td>\
            <td class="no-linebreak"> 3NNLmeJUzEst2PUUR12mWBimnvK9NMUgTJ </td>\
            <td class="no-linebreak"></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> Tether (USDT) TRC-20 </td>\
            <td class="no-linebreak"> TJnNueTEAvJvc2q3hSn1Mjave1BjQBKk7h </td>\
            <td class="no-linebreak"></td>\
         </tr>\
         <tr>\
            <td class="type-icon">\
               <div class="ipfs-_blank"> </div>\
            </td>\
            <td> Ethereum (ETH) ERC-20 </td>\
            <td class="no-linebreak"> 0x0fBA129646247186635075B6bbc0a0e322545EB9 </td>\
            <td class="no-linebreak"></td>\
         </tr>\
      </table>\
   </div>\
</div>';
   } else {
      document.getElementById("showinputhere").innerHTML = "No message set";
   }
}
