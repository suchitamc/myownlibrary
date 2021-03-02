function IsTouching(o1,o2){

    var disx = o1.width/2+o1.width/2;
    var disy = o1.height/2+o2.height/2;

  if(o1.x-o2.x < disx && o2.x-o1.x<disx &&
    o1.y-o2.y<disy && o2.y-o1.y<disy ){
    return true;

  }
  else{
  return false;

  }
}