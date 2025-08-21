function calculateArea(width, height) {
  return width * height;
}

let width = 10 ,height = 5;

let area = calculateArea(width, height);

if (area > 100) {
  console.log("The area is large")
} else {
  console.log("The area is small")
}

// This condition will never be true with current values
if (width + height > 100) {
  console.log("The Area is greater than or equal to 100")
} else {
  console.log("Area less");
  
}