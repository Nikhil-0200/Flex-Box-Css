let investors = [
    {
        id: 1,
        img: "https://www.masaischool.com/images/our-investors/india-q-borderless.svg",
    },
    {
        id: 2,
        img: "https://www.masaischool.com/images/our-investors/capria-logo.svg",
    },
    {
        id: 3,
        img: "https://www.masaischool.com/images/our-investors/omidyar-borderless.svg",
    },
]

let boardMembers = [
    {
        id: 1,
        investorsImg: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Vijay_Shekhar_Sharma_Paytm_96f52579b8.jpg",
        investorsName: "Vijay Shekhar Sharma",
        position: "Founder & CEO",
        investorsLogo: "https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_rect_06df45a24f.svg",
    },
    {
        id: 2,
        investorsImg: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Rectangle_427_637d69bb57.png",
        investorsName: "Kunal Shah",
        position: "Founder",
        investorsLogo: "https://masai-website-images.s3.ap-south-1.amazonaws.com/cred_0a47d7b4f8.png",
    },
    {
        id: 3,
        investorsImg: "https://masai-website-images.s3.ap-south-1.amazonaws.com/amrish_rau_pine_labs_144e5e587c.jpg",
        investorsName: "Amrish Rau",
        position: "CEO",
        investorsLogo: "https://masai-website-images.s3.ap-south-1.amazonaws.com/pine_labs_0aa2407434.png",
    },
    {
        id: 4,
        investorsImg: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Sampad_swain_Instamojo_f12bf6341e.jpg",
        investorsName: "Sampad Swain",
        position: "Co-Founder & CEO",
        investorsLogo: "https://masai-website-images.s3.ap-south-1.amazonaws.com/instamojo_8763e704f7.png",
    },
    {
        id: 5,
        investorsImg: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Ankush_Sachdeva_Sharechat_4e44dbbe6b.jpg",
        investorsName: "Ankush Sachdeva",
        position: "Co-Founder & CEO",
        investorsLogo: "https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_rect_73d95cd4e1.svg",
    },
    {
        id: 6,
        investorsImg: "https://masai-website-images.s3.ap-south-1.amazonaws.com/bhanu_pratap_singh_sharechat_11fdd7b47a.jpg",
        investorsName: "Bhanu Pratap Singh",
        position: "Co-Founder & CTO",
        investorsLogo: "https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_rect_73d95cd4e1.svg",
    },
    {
        id: 7,
        investorsImg: "https://masai-website-images.s3.ap-south-1.amazonaws.com/farid_ahsan_sharechat_1251f28141.png",
        investorsName: "Farid Ahsan",
        position: "Co-Founder & COO",
        investorsLogo: "https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_rect_73d95cd4e1.svg",
    },
    {
        id: 8,
        investorsImg: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Amit_Kumar_Agarwal_Nobroker_a8a279ad91.jpg",
        investorsName: "Amit Kumar Agarwal",
        position: "Founder & COO",
        investorsLogo: "https://masai-website-images.s3.ap-south-1.amazonaws.com/nobroker_rect_28c9778c30.svg",
    }
]


const flexDiv = document.getElementById("flexDiv");

investors.forEach((ele)=>{
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");

    img.src = ele.img

    imgDiv.append(img)
    flexDiv.append(imgDiv)
})


const gridDiv = document.getElementById("gridDiv");

boardMembers.forEach((ele)=>{
    const itemCard = document.createElement("div");
    itemCard.id = "itemCard";
    const itemDiv = document.createElement("div");
    itemDiv.id = "itemDiv";
    const img = document.createElement("img");
    const investorsName = document.createElement("h2");
    const position = document.createElement("h2");
    const investorsLogoDiv = document.createElement("div");
    investorsLogoDiv.id = "investorsLogoDiv";
    const investorsLogo = document.createElement("img");

    img.src = ele.investorsImg;
    investorsName.textContent = ele.investorsName
    position.textContent = ele.position
    investorsLogo.src = ele.investorsLogo

    investorsLogoDiv.append(investorsLogo)
    itemDiv.append(img)
    itemCard.append(itemDiv, investorsName, position, investorsLogoDiv)
    gridDiv.append(itemCard)
})