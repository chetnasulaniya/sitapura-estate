/* Sample listings. Replace with your real properties.
   To use a real photo, set img to a file path or URL, e.g. img:'photos/villa-1.jpg' */
window.PROPS = [
 {type:'Villas',name:'Kesar Court Villa',loc:'Vaishali Nagar',meta:'5 BHK, 6 bath',area:'200 sq.yd',price:'₹ 3.4 Cr',cr:3.4,bg:'#FFC08A,#F26B1D 60%,#8A2F0B',img:''},
 {type:'Apartments',name:'Sitapura Greens',loc:'Sitapura',meta:'3 & 4 BHK',area:'1,650 to 2,300 sq.ft',price:'₹ 1.1 to 1.5 Cr',cr:1.1,bg:'#FFD3A8,#FF8A00 60%,#9A4A00',img:''},
 {type:'Villas',name:'Orchard Villas',loc:'Sitapura',meta:'4 BHK, 5 bath',area:'250 sq.yd',price:'₹ 3.8 Cr',cr:3.8,bg:'#FFB08A,#E8590C 60%,#7A2A08',img:''},
 {type:'Plots',name:'Corner Plot, Sector A',loc:'Sitapura',meta:'Corner plot, 30 ft road',area:'300 sq.yd',price:'₹ 1.2 Cr',cr:1.2,bg:'#FFE0B8,#F59E3B 60%,#9C5A12',img:''},
 {type:'Apartments',name:'Amber Row',loc:'Jagatpura',meta:'2 & 3 BHK',area:'971 to 1,567 sq.ft',price:'₹ 52 to 74 Lakh',cr:0.52,bg:'#FFC08A,#F26B1D 60%,#8A2F0B',img:''},
 {type:'Houses',name:'Sandstone Bungalow',loc:'Malviya Nagar',meta:'4 BHK, 5 bath',area:'265 sq.yd',price:'₹ 5.5 Cr',cr:5.5,bg:'#FFD3A8,#FF8A00 60%,#9A4A00',img:''},
 {type:'Plots',name:'Gulmohar Plot, Phase II',loc:'Tonk Road',meta:'East facing, 12 m road',area:'448 sq.yd',price:'₹ 1.9 Cr',cr:1.9,bg:'#FFB08A,#E8590C 60%,#7A2A08',img:''},
 {type:'Apartments',name:'Terrace 21',loc:'Vaishali Nagar',meta:'3 BHK, 3 bath',area:'2,122 sq.ft',price:'₹ 1.65 Cr',cr:1.65,bg:'#FFE0B8,#F59E3B 60%,#9C5A12',img:''},
 {type:'Farmhouses',name:'Peepal Farm Retreat',loc:'Tonk Road',meta:'3 BHK, 2 acre',area:'Gated farm',price:'₹ 4.2 Cr',cr:4.2,bg:'#FFC08A,#F26B1D 60%,#8A2F0B',img:''},
 {type:'Apartments',name:'Skyline Heights',loc:'Mansarovar',meta:'3 BHK',area:'1,445 to 1,680 sq.ft',price:'₹ 77 to 92 Lakh',cr:0.77,bg:'#FFD3A8,#FF8A00 60%,#9A4A00',img:''},
 {type:'Houses',name:'Mahal House',loc:'Jagatpura',meta:'3 BHK, 4 bath',area:'150 sq.yd',price:'₹ 2.1 Cr',cr:2.1,bg:'#FFB08A,#E8590C 60%,#7A2A08',img:''},
 {type:'Farmhouses',name:'Banyan Estate',loc:'Sitapura',meta:'5 BHK, pool',area:'1 acre',price:'₹ 6.8 Cr',cr:6.8,bg:'#FFE0B8,#F59E3B 60%,#9C5A12',img:''}
];
window.TYPES = ['All','Apartments','Villas','Houses','Plots','Farmhouses'];
window.SK = '<svg class="art" viewBox="0 0 320 250" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><g fill="rgba(15,19,22,.55)"><rect x="40" y="120" width="70" height="130"/><rect x="118" y="76" width="80" height="174"/><rect x="206" y="140" width="80" height="110"/></g><g fill="rgba(251,231,211,.75)"><rect x="54" y="138" width="10" height="14"/><rect x="78" y="138" width="10" height="14"/><rect x="134" y="98" width="10" height="14"/><rect x="160" y="98" width="10" height="14"/><rect x="134" y="130" width="10" height="14"/><rect x="220" y="160" width="10" height="14"/></g></svg>';
window.HILLS = '<svg class="art" viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="M-10 300V210l50-40 40 30 50-60 70 50v110z" fill="rgba(15,19,22,.35)"/><path d="M-10 300V250l60-30 50 20 60-40 50 30v70z" fill="rgba(15,19,22,.5)"/></svg>';
window.propCard = function (p) {
  var visual = p.img
    ? '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy">'
    : window.SK;
  return '<a class="card prop lift" href="contact.html?property=' + encodeURIComponent(p.name) + '#enquire">' +
    '<div class="img" style="background:linear-gradient(160deg,' + p.bg + ')">' + visual + '<span class="tag">' + p.type + '</span></div>' +
    '<div class="body"><h3>' + p.name + '</h3>' +
    '<div class="meta">' + p.loc + ', Jaipur</div>' +
    '<div class="meta">' + p.meta + ' &middot; ' + p.area + '</div>' +
    '<div class="price">' + p.price + '</div></div></a>';
};
window.inBand = function (cr, band) {
  return band === 'Any' || (band === 'Under 1 Cr' && cr < 1) || (band === '1 to 3 Cr' && cr >= 1 && cr <= 3) || (band === 'Above 3 Cr' && cr > 3);
};
