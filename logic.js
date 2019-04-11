const regions = require('./regions');
//console.log(regions);
console.log('Hello world');
var Provinces = [];
var Districts = [];
var ProvinceAndDistricts = [];
var LatLong = [];
var counties = [];

regions.forEach(region =>{
Provinces.push(region.Province);
});

regions.forEach(region =>{
Districts.push(region.District);
});
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

var uniqueProvinces = Provinces.filter(onlyUnique);
var uniqueDistricts = Districts.filter(onlyUnique);
console.log(Provinces.filter(onlyUnique));
console.log(Districts.filter(onlyUnique));

uniqueDistricts.forEach(district =>{
  regions.forEach(region =>{
    if(region.District == district && region.Lat != null){
      LatLong.push({district:district,coordinates:[region.Lat,region.Long]});
      counties.push({province:region.Province,district:district});
    }
  }
  )
})

console.log(LatLong.filter(onlyUnique));
console.log(counties.filter(onlyUnique));

var geometry = LatLong.filter(onlyUnique);
var counties = counties.filter(onlyUnique);

var campuses = [];
var county= { 
   'type': 'FeatureCollection',
   'features':[],

    }
var mould = function (){
  counties.forEach(county =>{

}
 geometry.forEach(coordinate =>{
      if(county.district == coordinate.district){
        //campus.geometry.coordinates.push(coordinate.coordinates);
        var  feature = {
      'geometry': {
        'type': 'Point',
        'coordinates': coordinate.coordinates
      },
      'type': 'Feature',
      'properties': {
        'popupContent': county.province
      },
      'id': geometry[coordinate]
    };
    county.features.push(feature);
      }
  });
  campuses.push(campus);
});
};

mould();
console.log(campuses);



email:uatuser@newlogic.io
password:Kiprop34@


<option value="html-to-xlsx">html-to-xlsx</option>