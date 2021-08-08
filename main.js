var images = ["collage_1.jpg","3.jpg","IMG-20201209-WA0000.jpg","mama aand me.jpeg","mausoo and me.jpeg","WhatsApp Image 2021-08-07 at 16.12.14 (7).jpeg","WhatsApp Image 2021-08-07 at 16.12.15.jpeg"];
var names = ["Sidharth Naik", "Snehal Naik", "Bhumee Naik", "Prathamesh Arolkar", "Swapna Redkar","Ayan Redkar","Vinod Redkar"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 7
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

