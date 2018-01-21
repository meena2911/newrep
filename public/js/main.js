console.log("loaded");
$.ajax({
  type:"GET",
  url:"https://api.myjson.com/bins/tls49",
  dataType:"json",
  success:function(response){
  //  console.log("Data from success",response);
var data=formObject(response);
constructDOM(data);
  },
  error:function(err){
    console.log("error in GET method",err);
  }
});
function formObject(response){
  var flags=[],categoryObject=[];
  var length=response.length;
  for(var i=0;i<length;i++){
    var movie=response[i];
    // console.log("movie",movie);
  //  console.log("language",movie.language);
  var index=flags.indexOf(movie.language);
  if(index>=0){
categoryObject[index].movie.push(movie);
continue;


}else{
    flags.push(movie.language);
  }
  var objectSchema={
    "category":movie.language,
"movie":[]
  }
  objectSchema.movie.push(movie);
  categoryObject.push(objectSchema);
  console.log("categoryObject",categoryObject);
}
console.log(flags);
return categoryObject;
  }
function constructDOM(data){
  var categoryContent=[];
  for(var i=0;i<data.length;i++){
    var objectSchema=data[i];
console.log("constructDOM data",objectSchema);
var categoryTitle=$('<h3 class="categoryName">'+objectSchema.category+'</h3>');
categoryContent.push(categoryTitle);
  }
  $('section.content').html(categoryContent);
}
