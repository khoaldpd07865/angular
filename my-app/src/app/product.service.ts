import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();
  allsp=[
    {
      id:1,
      name: "Giày Nike",
       description: "Phần đế giữa của Nike Air Max AP được thiết kế rất hợp lý mềm mại với công nghệ tiên tiến nhất của Nike. Chắc chắn đây là mẫu giày mà bất cứ fan Sneaker không thể bỏ qua       ", 
       original_price: 180, 
       current_price: 108, 
       price_unit: "USD", 
       rating: 4.9, 
       rating_count: 2140,
      colors:[ 
        { 
          color_name: "black", 
          color_code: "black", 
          images: [ "https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/cu4826-0011.png"
          ,"https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/cu4826-0011.png",
          "https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/cu4826-0011.png"   ] 
        }, 
        { 
          color_name: "white", 
          color_code: "white", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-nike-air-force-1-low-fontanka-triple-white-dq5021-100-63aa67afbc5ae-27122022103407.jpg"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-nike-air-force-1-low-fontanka-triple-white-dq5021-100-63aa67afbc5ae-27122022103407.jpg" ,
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-nike-air-force-1-low-fontanka-triple-white-dq5021-100-63aa67afbc5ae-27122022103407.jpg"   ]    },
        { 
          color_name: "red", 
          color_code: "red", 
          images: [ "https://sneakerdaily.vn/wp-content/uploads/2023/08/Giay-Air-Jordan-1-Low-FlyEase-Alternate-Bred-Toe-DM1206-066.jpg"
          ,"https://sneakerdaily.vn/wp-content/uploads/2023/08/Giay-Air-Jordan-1-Low-FlyEase-Alternate-Bred-Toe-DM1206-066.jpg" ,
          "https://sneakerdaily.vn/wp-content/uploads/2023/08/Giay-Air-Jordan-1-Low-FlyEase-Alternate-Bred-Toe-DM1206-066.jpg"   ]    } 
      ],
      size: ["40", "41", "42"], 
      size_unit: "cm", 
      isDisplay:true,
      isInstock: true,
      isBestseller: true,
      selectedColorIndex: 0,
      selectedColor:  '',
      currentSize:"",
      quanlity: 0,
      total: 0,
      changeSize(size: string,index: number){
        let targetElement=event?.target as HTMLButtonElement;
        let arrayElement=document.getElementsByClassName('option-size')[index].children;
        if(this.currentSize!=""){
          for(let i=0;i<arrayElement.length;i++){
            if(arrayElement[i].textContent==this.currentSize){
              let a=arrayElement[i].classList.remove('highlight');
            }
          }
        }
        this.currentSize=size;
        targetElement.classList.add('highlight');
      },
      changeColor(selectedColor: any) {
        this.selectedColor = selectedColor.color_code;
         if (selectedColor.images && selectedColor.images.length > 0) {
           const colorIndex = this.colors.findIndex(color => color.color_code === selectedColor.color_code);
           this.selectedColorIndex = colorIndex;
         } else {
           console.error('No images found for the selected color.');
         }
       },
       isValidProduct(){
          if(this.selectedColor!=""&&this.currentSize!=""&&this.quanlity>0){
            return false;
          }else{
            return true;
          }
       }

    },
    {
      id:2,
      name: "Giày sneaker",
       description: "Giày Nike Air Force 1 Low All White Mẫu giày đầu tiên mà không thể bỏ qua được đó chính là Nike Air Force 1 Low All White, thiết kế sản phẩm bắt mắt. Mũi giày được thiết kế đục lỗ thoát khí và phần đế giày cứng cáp ", 
       original_price: 190, 
       current_price: 180, 
       price_unit: "USD", 
       rating: 4.9, 
       rating_count: 2140,
      colors:[ 
        { 
          color_name: "black", 
          color_code: "black", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-the-thao-sneaker-whoau-steve-whpgc2121a-mau-den-6396e3929d842-12122022151722.jpg"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-the-thao-sneaker-whoau-steve-whpgc2121a-mau-den-6396e3929d842-12122022151722.jpg",
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-the-thao-sneaker-whoau-steve-whpgc2121a-mau-den-6396e3929d842-12122022151722.jpg"   ] 
        }, 
        { 
          color_name: "white", 
          color_code: "white", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-tommy-hilfiger-anni-slip-on-sneaker-63aa55971bb5f-27122022091655.jpg"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-tommy-hilfiger-anni-slip-on-sneaker-63aa55971bb5f-27122022091655.jpg" ,
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-tommy-hilfiger-anni-slip-on-sneaker-63aa55971bb5f-27122022091655.jpg"   ]    },
        { 
          color_name: "green", 
          color_code: "green", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/01/giay-dolce-gabbana-sorrento-stretch-jersey-sneakers-63d37e5d4f5ed-27012023143349.png"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/01/giay-dolce-gabbana-sorrento-stretch-jersey-sneakers-63d37e5d4f5ed-27012023143349.png" ,
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/01/giay-dolce-gabbana-sorrento-stretch-jersey-sneakers-63d37e5d4f5ed-27012023143349.png"   ]    } 
      ],
      size: ["40", "41", "42"], 
      size_unit: "cm", 
      isDisplay:true,
      isInstock: true,
      isBestseller: true,
      selectedColorIndex: 0,
      selectedColor:  '',
      currentSize:"",
      quanlity: 0,
      total: 0,
      changeSize(size: string,index: number){
        let targetElement=event?.target as HTMLButtonElement;
        let arrayElement=document.getElementsByClassName('option-size')[index].children;
        if(this.currentSize!=""){
          for(let i=0;i<arrayElement.length;i++){
            if(arrayElement[i].textContent==this.currentSize){
              let a=arrayElement[i].classList.remove('highlight');
            }
          }
        }
        this.currentSize=size;
        targetElement.classList.add('highlight');
      },
      changeColor(selectedColor: any) {
        this.selectedColor = selectedColor.color_code;
         if (selectedColor.images && selectedColor.images.length > 0) {
           const colorIndex = this.colors.findIndex(color => color.color_code === selectedColor.color_code);
           this.selectedColorIndex = colorIndex;
         } else {
           console.error('No images found for the selected color.');
         }
       },
       isValidProduct(){
          if(this.selectedColor!=""&&this.currentSize!=""&&this.quanlity>0){
            return false;
          }else{
            return true;
          }
       }

    },
    {
      id:1,
      name: "Giày Nike",
       description: "Phần đế giữa của Nike Air Max AP được thiết kế rất hợp lý mềm mại với công nghệ tiên tiến nhất của Nike. Chắc chắn đây là mẫu giày mà bất cứ fan Sneaker không thể bỏ qua       ", 
       original_price: 180, 
       current_price: 108, 
       price_unit: "USD", 
       rating: 4.9, 
       rating_count: 2140,
      colors:[ 
        { 
          color_name: "black", 
          color_code: "black", 
          images: [ "https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/cu4826-0011.png"
          ,"https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/cu4826-0011.png",
          "https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/cu4826-0011.png"   ] 
        }, 
        { 
          color_name: "white", 
          color_code: "white", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-nike-air-force-1-low-fontanka-triple-white-dq5021-100-63aa67afbc5ae-27122022103407.jpg"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-nike-air-force-1-low-fontanka-triple-white-dq5021-100-63aa67afbc5ae-27122022103407.jpg" ,
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-nike-air-force-1-low-fontanka-triple-white-dq5021-100-63aa67afbc5ae-27122022103407.jpg"   ]    },
        { 
          color_name: "red", 
          color_code: "red", 
          images: [ "https://sneakerdaily.vn/wp-content/uploads/2023/08/Giay-Air-Jordan-1-Low-FlyEase-Alternate-Bred-Toe-DM1206-066.jpg"
          ,"https://sneakerdaily.vn/wp-content/uploads/2023/08/Giay-Air-Jordan-1-Low-FlyEase-Alternate-Bred-Toe-DM1206-066.jpg" ,
          "https://sneakerdaily.vn/wp-content/uploads/2023/08/Giay-Air-Jordan-1-Low-FlyEase-Alternate-Bred-Toe-DM1206-066.jpg"   ]    } 
      ],
      size: ["40", "41", "42"], 
      size_unit: "cm", 
      isDisplay:true,
      isInstock: true,
      isBestseller: true,
      selectedColorIndex: 0,
      selectedColor:  '',
      currentSize:"",
      quanlity: 0,
      total: 0,
      changeSize(size: string,index: number){
        let targetElement=event?.target as HTMLButtonElement;
        let arrayElement=document.getElementsByClassName('option-size')[index].children;
        if(this.currentSize!=""){
          for(let i=0;i<arrayElement.length;i++){
            if(arrayElement[i].textContent==this.currentSize){
              let a=arrayElement[i].classList.remove('highlight');
            }
          }
        }
        this.currentSize=size;
        targetElement.classList.add('highlight');
      },
      changeColor(selectedColor: any) {
        this.selectedColor = selectedColor.color_code;
         if (selectedColor.images && selectedColor.images.length > 0) {
           const colorIndex = this.colors.findIndex(color => color.color_code === selectedColor.color_code);
           this.selectedColorIndex = colorIndex;
         } else {
           console.error('No images found for the selected color.');
         }
       },
       isValidProduct(){
          if(this.selectedColor!=""&&this.currentSize!=""&&this.quanlity>0){
            return false;
          }else{
            return true;
          }
       }

    },
    {
      id:2,
      name: "Giày sneaker",
       description: "Giày Nike Air Force 1 Low All White Mẫu giày đầu tiên mà không thể bỏ qua được đó chính là Nike Air Force 1 Low All White, thiết kế sản phẩm bắt mắt. Mũi giày được thiết kế đục lỗ thoát khí và phần đế giày cứng cáp ", 
       original_price: 190, 
       current_price: 180, 
       price_unit: "USD", 
       rating: 4.9, 
       rating_count: 2140,
      colors:[ 
        { 
          color_name: "black", 
          color_code: "black", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-the-thao-sneaker-whoau-steve-whpgc2121a-mau-den-6396e3929d842-12122022151722.jpg"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-the-thao-sneaker-whoau-steve-whpgc2121a-mau-den-6396e3929d842-12122022151722.jpg",
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-the-thao-sneaker-whoau-steve-whpgc2121a-mau-den-6396e3929d842-12122022151722.jpg"   ] 
        }, 
        { 
          color_name: "white", 
          color_code: "white", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-tommy-hilfiger-anni-slip-on-sneaker-63aa55971bb5f-27122022091655.jpg"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-tommy-hilfiger-anni-slip-on-sneaker-63aa55971bb5f-27122022091655.jpg" ,
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-tommy-hilfiger-anni-slip-on-sneaker-63aa55971bb5f-27122022091655.jpg"   ]    },
        { 
          color_name: "green", 
          color_code: "green", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/01/giay-dolce-gabbana-sorrento-stretch-jersey-sneakers-63d37e5d4f5ed-27012023143349.png"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/01/giay-dolce-gabbana-sorrento-stretch-jersey-sneakers-63d37e5d4f5ed-27012023143349.png" ,
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/01/giay-dolce-gabbana-sorrento-stretch-jersey-sneakers-63d37e5d4f5ed-27012023143349.png"   ]    } 
      ],
      size: ["40", "41", "42"], 
      size_unit: "cm", 
      isDisplay:true,
      isInstock: true,
      isBestseller: true,
      selectedColorIndex: 0,
      selectedColor:  '',
      currentSize:"",
      quanlity: 0,
      total: 0,
      changeSize(size: string,index: number){
        let targetElement=event?.target as HTMLButtonElement;
        let arrayElement=document.getElementsByClassName('option-size')[index].children;
        if(this.currentSize!=""){
          for(let i=0;i<arrayElement.length;i++){
            if(arrayElement[i].textContent==this.currentSize){
              let a=arrayElement[i].classList.remove('highlight');
            }
          }
        }
        this.currentSize=size;
        targetElement.classList.add('highlight');
      },
      changeColor(selectedColor: any) {
        this.selectedColor = selectedColor.color_code;
         if (selectedColor.images && selectedColor.images.length > 0) {
           const colorIndex = this.colors.findIndex(color => color.color_code === selectedColor.color_code);
           this.selectedColorIndex = colorIndex;
         } else {
           console.error('No images found for the selected color.');
         }
       },
       isValidProduct(){
          if(this.selectedColor!=""&&this.currentSize!=""&&this.quanlity>0){
            return false;
          }else{
            return true;
          }
       }

    },
    {
      id:1,
      name: "Giày Nike",
       description: "Phần đế giữa của Nike Air Max AP được thiết kế rất hợp lý mềm mại với công nghệ tiên tiến nhất của Nike. Chắc chắn đây là mẫu giày mà bất cứ fan Sneaker không thể bỏ qua       ", 
       original_price: 180, 
       current_price: 108, 
       price_unit: "USD", 
       rating: 4.9, 
       rating_count: 2140,
      colors:[ 
        { 
          color_name: "black", 
          color_code: "black", 
          images: [ "https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/cu4826-0011.png"
          ,"https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/cu4826-0011.png",
          "https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/cu4826-0011.png"   ] 
        }, 
        { 
          color_name: "white", 
          color_code: "white", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-nike-air-force-1-low-fontanka-triple-white-dq5021-100-63aa67afbc5ae-27122022103407.jpg"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-nike-air-force-1-low-fontanka-triple-white-dq5021-100-63aa67afbc5ae-27122022103407.jpg" ,
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-nike-air-force-1-low-fontanka-triple-white-dq5021-100-63aa67afbc5ae-27122022103407.jpg"   ]    },
        { 
          color_name: "red", 
          color_code: "red", 
          images: [ "https://sneakerdaily.vn/wp-content/uploads/2023/08/Giay-Air-Jordan-1-Low-FlyEase-Alternate-Bred-Toe-DM1206-066.jpg"
          ,"https://sneakerdaily.vn/wp-content/uploads/2023/08/Giay-Air-Jordan-1-Low-FlyEase-Alternate-Bred-Toe-DM1206-066.jpg" ,
          "https://sneakerdaily.vn/wp-content/uploads/2023/08/Giay-Air-Jordan-1-Low-FlyEase-Alternate-Bred-Toe-DM1206-066.jpg"   ]    } 
      ],
      size: ["40", "41", "42"], 
      size_unit: "cm", 
      isDisplay:true,
      isInstock: true,
      isBestseller: true,
      selectedColorIndex: 0,
      selectedColor:  '',
      currentSize:"",
      quanlity: 0,
      total: 0,
      changeSize(size: string,index: number){
        let targetElement=event?.target as HTMLButtonElement;
        let arrayElement=document.getElementsByClassName('option-size')[index].children;
        if(this.currentSize!=""){
          for(let i=0;i<arrayElement.length;i++){
            if(arrayElement[i].textContent==this.currentSize){
              let a=arrayElement[i].classList.remove('highlight');
            }
          }
        }
        this.currentSize=size;
        targetElement.classList.add('highlight');
      },
      changeColor(selectedColor: any) {
        this.selectedColor = selectedColor.color_code;
         if (selectedColor.images && selectedColor.images.length > 0) {
           const colorIndex = this.colors.findIndex(color => color.color_code === selectedColor.color_code);
           this.selectedColorIndex = colorIndex;
         } else {
           console.error('No images found for the selected color.');
         }
       },
       isValidProduct(){
          if(this.selectedColor!=""&&this.currentSize!=""&&this.quanlity>0){
            return false;
          }else{
            return true;
          }
       }

    },
    {
      id:2,
      name: "Giày sneaker",
       description: "Giày Nike Air Force 1 Low All White Mẫu giày đầu tiên mà không thể bỏ qua được đó chính là Nike Air Force 1 Low All White, thiết kế sản phẩm bắt mắt. Mũi giày được thiết kế đục lỗ thoát khí và phần đế giày cứng cáp ", 
       original_price: 190, 
       current_price: 180, 
       price_unit: "USD", 
       rating: 4.9, 
       rating_count: 2140,
      colors:[ 
        { 
          color_name: "black", 
          color_code: "black", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-the-thao-sneaker-whoau-steve-whpgc2121a-mau-den-6396e3929d842-12122022151722.jpg"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-the-thao-sneaker-whoau-steve-whpgc2121a-mau-den-6396e3929d842-12122022151722.jpg",
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-the-thao-sneaker-whoau-steve-whpgc2121a-mau-den-6396e3929d842-12122022151722.jpg"   ] 
        }, 
        { 
          color_name: "white", 
          color_code: "white", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-tommy-hilfiger-anni-slip-on-sneaker-63aa55971bb5f-27122022091655.jpg"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-tommy-hilfiger-anni-slip-on-sneaker-63aa55971bb5f-27122022091655.jpg" ,
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-tommy-hilfiger-anni-slip-on-sneaker-63aa55971bb5f-27122022091655.jpg"   ]    },
        { 
          color_name: "green", 
          color_code: "green", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/01/giay-dolce-gabbana-sorrento-stretch-jersey-sneakers-63d37e5d4f5ed-27012023143349.png"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/01/giay-dolce-gabbana-sorrento-stretch-jersey-sneakers-63d37e5d4f5ed-27012023143349.png" ,
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/01/giay-dolce-gabbana-sorrento-stretch-jersey-sneakers-63d37e5d4f5ed-27012023143349.png"   ]    } 
      ],
      size: ["40", "41", "42"], 
      size_unit: "cm", 
      isDisplay:true,
      isInstock: true,
      isBestseller: true,
      selectedColorIndex: 0,
      selectedColor:  '',
      currentSize:"",
      quanlity: 0,
      total: 0,
      changeSize(size: string,index: number){
        let targetElement=event?.target as HTMLButtonElement;
        let arrayElement=document.getElementsByClassName('option-size')[index].children;
        if(this.currentSize!=""){
          for(let i=0;i<arrayElement.length;i++){
            if(arrayElement[i].textContent==this.currentSize){
              let a=arrayElement[i].classList.remove('highlight');
            }
          }
        }
        this.currentSize=size;
        targetElement.classList.add('highlight');
      },
      changeColor(selectedColor: any) {
        this.selectedColor = selectedColor.color_code;
         if (selectedColor.images && selectedColor.images.length > 0) {
           const colorIndex = this.colors.findIndex(color => color.color_code === selectedColor.color_code);
           this.selectedColorIndex = colorIndex;
         } else {
           console.error('No images found for the selected color.');
         }
       },
       isValidProduct(){
          if(this.selectedColor!=""&&this.currentSize!=""&&this.quanlity>0){
            return false;
          }else{
            return true;
          }
       }

    },
    {
      id:1,
      name: "Giày Nike",
       description: "Phần đế giữa của Nike Air Max AP được thiết kế rất hợp lý mềm mại với công nghệ tiên tiến nhất của Nike. Chắc chắn đây là mẫu giày mà bất cứ fan Sneaker không thể bỏ qua       ", 
       original_price: 180, 
       current_price: 108, 
       price_unit: "USD", 
       rating: 4.9, 
       rating_count: 2140,
      colors:[ 
        { 
          color_name: "black", 
          color_code: "black", 
          images: [ "https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/cu4826-0011.png"
          ,"https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/cu4826-0011.png",
          "https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/cu4826-0011.png"   ] 
        }, 
        { 
          color_name: "white", 
          color_code: "white", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-nike-air-force-1-low-fontanka-triple-white-dq5021-100-63aa67afbc5ae-27122022103407.jpg"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-nike-air-force-1-low-fontanka-triple-white-dq5021-100-63aa67afbc5ae-27122022103407.jpg" ,
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-nike-air-force-1-low-fontanka-triple-white-dq5021-100-63aa67afbc5ae-27122022103407.jpg"   ]    },
        { 
          color_name: "red", 
          color_code: "red", 
          images: [ "https://sneakerdaily.vn/wp-content/uploads/2023/08/Giay-Air-Jordan-1-Low-FlyEase-Alternate-Bred-Toe-DM1206-066.jpg"
          ,"https://sneakerdaily.vn/wp-content/uploads/2023/08/Giay-Air-Jordan-1-Low-FlyEase-Alternate-Bred-Toe-DM1206-066.jpg" ,
          "https://sneakerdaily.vn/wp-content/uploads/2023/08/Giay-Air-Jordan-1-Low-FlyEase-Alternate-Bred-Toe-DM1206-066.jpg"   ]    } 
      ],
      size: ["40", "41", "42"], 
      size_unit: "cm", 
      isDisplay:true,
      isInstock: true,
      isBestseller: true,
      selectedColorIndex: 0,
      selectedColor:  '',
      currentSize:"",
      quanlity: 0,
      total: 0,
      changeSize(size: string,index: number){
        let targetElement=event?.target as HTMLButtonElement;
        let arrayElement=document.getElementsByClassName('option-size')[index].children;
        if(this.currentSize!=""){
          for(let i=0;i<arrayElement.length;i++){
            if(arrayElement[i].textContent==this.currentSize){
              let a=arrayElement[i].classList.remove('highlight');
            }
          }
        }
        this.currentSize=size;
        targetElement.classList.add('highlight');
      },
      changeColor(selectedColor: any) {
        this.selectedColor = selectedColor.color_code;
         if (selectedColor.images && selectedColor.images.length > 0) {
           const colorIndex = this.colors.findIndex(color => color.color_code === selectedColor.color_code);
           this.selectedColorIndex = colorIndex;
         } else {
           console.error('No images found for the selected color.');
         }
       },
       isValidProduct(){
          if(this.selectedColor!=""&&this.currentSize!=""&&this.quanlity>0){
            return false;
          }else{
            return true;
          }
       }

    },
    {
      id:2,
      name: "Giày sneaker",
       description: "Giày Nike Air Force 1 Low All White Mẫu giày đầu tiên mà không thể bỏ qua được đó chính là Nike Air Force 1 Low All White, thiết kế sản phẩm bắt mắt. Mũi giày được thiết kế đục lỗ thoát khí và phần đế giày cứng cáp ", 
       original_price: 190, 
       current_price: 180, 
       price_unit: "USD", 
       rating: 4.9, 
       rating_count: 2140,
      colors:[ 
        { 
          color_name: "black", 
          color_code: "black", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-the-thao-sneaker-whoau-steve-whpgc2121a-mau-den-6396e3929d842-12122022151722.jpg"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-the-thao-sneaker-whoau-steve-whpgc2121a-mau-den-6396e3929d842-12122022151722.jpg",
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-the-thao-sneaker-whoau-steve-whpgc2121a-mau-den-6396e3929d842-12122022151722.jpg"   ] 
        }, 
        { 
          color_name: "white", 
          color_code: "white", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-tommy-hilfiger-anni-slip-on-sneaker-63aa55971bb5f-27122022091655.jpg"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-tommy-hilfiger-anni-slip-on-sneaker-63aa55971bb5f-27122022091655.jpg" ,
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-tommy-hilfiger-anni-slip-on-sneaker-63aa55971bb5f-27122022091655.jpg"   ]    },
        { 
          color_name: "green", 
          color_code: "green", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/01/giay-dolce-gabbana-sorrento-stretch-jersey-sneakers-63d37e5d4f5ed-27012023143349.png"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/01/giay-dolce-gabbana-sorrento-stretch-jersey-sneakers-63d37e5d4f5ed-27012023143349.png" ,
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/01/giay-dolce-gabbana-sorrento-stretch-jersey-sneakers-63d37e5d4f5ed-27012023143349.png"   ]    } 
      ],
      size: ["40", "41", "42"], 
      size_unit: "cm", 
      isDisplay:true,
      isInstock: true,
      isBestseller: true,
      selectedColorIndex: 0,
      selectedColor:  '',
      currentSize:"",
      quanlity: 0,
      total: 0,
      changeSize(size: string,index: number){
        let targetElement=event?.target as HTMLButtonElement;
        let arrayElement=document.getElementsByClassName('option-size')[index].children;
        if(this.currentSize!=""){
          for(let i=0;i<arrayElement.length;i++){
            if(arrayElement[i].textContent==this.currentSize){
              let a=arrayElement[i].classList.remove('highlight');
            }
          }
        }
        this.currentSize=size;
        targetElement.classList.add('highlight');
      },
      changeColor(selectedColor: any) {
        this.selectedColor = selectedColor.color_code;
         if (selectedColor.images && selectedColor.images.length > 0) {
           const colorIndex = this.colors.findIndex(color => color.color_code === selectedColor.color_code);
           this.selectedColorIndex = colorIndex;
         } else {
           console.error('No images found for the selected color.');
         }
       },
       isValidProduct(){
          if(this.selectedColor!=""&&this.currentSize!=""&&this.quanlity>0){
            return false;
          }else{
            return true;
          }
       }

    },
    {
      id:1,
      name: "Giày Nike",
       description: "Phần đế giữa của Nike Air Max AP được thiết kế rất hợp lý mềm mại với công nghệ tiên tiến nhất của Nike. Chắc chắn đây là mẫu giày mà bất cứ fan Sneaker không thể bỏ qua       ", 
       original_price: 180, 
       current_price: 108, 
       price_unit: "USD", 
       rating: 4.9, 
       rating_count: 2140,
      colors:[ 
        { 
          color_name: "black", 
          color_code: "black", 
          images: [ "https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/cu4826-0011.png"
          ,"https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/cu4826-0011.png",
          "https://cdn.authentic-shoes.com/wp-content/uploads/2023/08/cu4826-0011.png"   ] 
        }, 
        { 
          color_name: "white", 
          color_code: "white", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-nike-air-force-1-low-fontanka-triple-white-dq5021-100-63aa67afbc5ae-27122022103407.jpg"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-nike-air-force-1-low-fontanka-triple-white-dq5021-100-63aa67afbc5ae-27122022103407.jpg" ,
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-nike-air-force-1-low-fontanka-triple-white-dq5021-100-63aa67afbc5ae-27122022103407.jpg"   ]    },
        { 
          color_name: "red", 
          color_code: "red", 
          images: [ "https://sneakerdaily.vn/wp-content/uploads/2023/08/Giay-Air-Jordan-1-Low-FlyEase-Alternate-Bred-Toe-DM1206-066.jpg"
          ,"https://sneakerdaily.vn/wp-content/uploads/2023/08/Giay-Air-Jordan-1-Low-FlyEase-Alternate-Bred-Toe-DM1206-066.jpg" ,
          "https://sneakerdaily.vn/wp-content/uploads/2023/08/Giay-Air-Jordan-1-Low-FlyEase-Alternate-Bred-Toe-DM1206-066.jpg"   ]    } 
      ],
      size: ["40", "41", "42"], 
      size_unit: "cm", 
      isDisplay:true,
      isInstock: true,
      isBestseller: true,
      selectedColorIndex: 0,
      selectedColor:  '',
      currentSize:"",
      quanlity: 0,
      total: 0,
      changeSize(size: string,index: number){
        let targetElement=event?.target as HTMLButtonElement;
        let arrayElement=document.getElementsByClassName('option-size')[index].children;
        if(this.currentSize!=""){
          for(let i=0;i<arrayElement.length;i++){
            if(arrayElement[i].textContent==this.currentSize){
              let a=arrayElement[i].classList.remove('highlight');
            }
          }
        }
        this.currentSize=size;
        targetElement.classList.add('highlight');
      },
      changeColor(selectedColor: any) {
        this.selectedColor = selectedColor.color_code;
         if (selectedColor.images && selectedColor.images.length > 0) {
           const colorIndex = this.colors.findIndex(color => color.color_code === selectedColor.color_code);
           this.selectedColorIndex = colorIndex;
         } else {
           console.error('No images found for the selected color.');
         }
       },
       isValidProduct(){
          if(this.selectedColor!=""&&this.currentSize!=""&&this.quanlity>0){
            return false;
          }else{
            return true;
          }
       }

    },
    {
      id:2,
      name: "Giày sneaker",
       description: "Giày Nike Air Force 1 Low All White Mẫu giày đầu tiên mà không thể bỏ qua được đó chính là Nike Air Force 1 Low All White, thiết kế sản phẩm bắt mắt. Mũi giày được thiết kế đục lỗ thoát khí và phần đế giày cứng cáp ", 
       original_price: 190, 
       current_price: 180, 
       price_unit: "USD", 
       rating: 4.9, 
       rating_count: 2140,
      colors:[ 
        { 
          color_name: "black", 
          color_code: "black", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-the-thao-sneaker-whoau-steve-whpgc2121a-mau-den-6396e3929d842-12122022151722.jpg"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-the-thao-sneaker-whoau-steve-whpgc2121a-mau-den-6396e3929d842-12122022151722.jpg",
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-the-thao-sneaker-whoau-steve-whpgc2121a-mau-den-6396e3929d842-12122022151722.jpg"   ] 
        }, 
        { 
          color_name: "white", 
          color_code: "white", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-tommy-hilfiger-anni-slip-on-sneaker-63aa55971bb5f-27122022091655.jpg"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-tommy-hilfiger-anni-slip-on-sneaker-63aa55971bb5f-27122022091655.jpg" ,
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/12/giay-tommy-hilfiger-anni-slip-on-sneaker-63aa55971bb5f-27122022091655.jpg"   ]    },
        { 
          color_name: "green", 
          color_code: "green", 
          images: [ "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/01/giay-dolce-gabbana-sorrento-stretch-jersey-sneakers-63d37e5d4f5ed-27012023143349.png"
          ,"https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/01/giay-dolce-gabbana-sorrento-stretch-jersey-sneakers-63d37e5d4f5ed-27012023143349.png" ,
          "https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2023/01/giay-dolce-gabbana-sorrento-stretch-jersey-sneakers-63d37e5d4f5ed-27012023143349.png"   ]    } 
      ],
      size: ["40", "41", "42"], 
      size_unit: "cm", 
      isDisplay:true,
      isInstock: true,
      isBestseller: true,
      selectedColorIndex: 0,
      selectedColor:  '',
      currentSize:"",
      quanlity: 0,
      total: 0,
      changeSize(size: string,index: number){
        let targetElement=event?.target as HTMLButtonElement;
        let arrayElement=document.getElementsByClassName('option-size')[index].children;
        if(this.currentSize!=""){
          for(let i=0;i<arrayElement.length;i++){
            if(arrayElement[i].textContent==this.currentSize){
              let a=arrayElement[i].classList.remove('highlight');
            }
          }
        }
        this.currentSize=size;
        targetElement.classList.add('highlight');
      },
      changeColor(selectedColor: any) {
        this.selectedColor = selectedColor.color_code;
         if (selectedColor.images && selectedColor.images.length > 0) {
           const colorIndex = this.colors.findIndex(color => color.color_code === selectedColor.color_code);
           this.selectedColorIndex = colorIndex;
         } else {
           console.error('No images found for the selected color.');
         }
       },
       isValidProduct(){
          if(this.selectedColor!=""&&this.currentSize!=""&&this.quanlity>0){
            return false;
          }else{
            return true;
          }
       }

    },

       
  ];
  // sendData(data: any) {
  //   this.dataSubject.next(data);
  // }
  getAllProducts() {
    return this.allsp;
  }

  getProductById(id: number) {
    return this.allsp.find(product => product.id == id);
  }
  constructor() { }
}
