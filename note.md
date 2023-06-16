---
marp: true
---

# Info
1. Project: capstone 2 - Group 4 - Shoe Shop
2. Team Members:
    - Huỳnh Quang Bảo
    - Nguyễn Đình Anh Hào

# Relevant Links
1. Google Drive: https://drive.google.com/drive/folders/1JDA_90TrYayrDAwPx5senfaQfKb83xTD?usp=sharing 
2. Github Link: https://github.com/hqbao000101/BCS07_CAPSTONE2_G4_ShoeShop.git
3. API Link: https://shop.cyberlearn.vn/swagger/index.html 
4. Layout Reference: https://similux-jewelry.myshopify.com/ 

# Team Workflow
- Bao will take full responsibility for the home page as well as the register page:
    + home: 
        1. api --> getProduct
        2. css --> style.scss
        3. js --> main.js

    + register: 
        1. api --> signUp
        2. css --> _register.scss
        3. js --> register.js

- Hao will develop the detail page 
    + detail: 
        1. api --> getProductById
        2. css --> _detail.scss
        3. js --> detail.js

- Common js files: helper.js

- Branch: 
    + Bao will code directly to the master branch
    + Hao will create a new branch called "detail" and work on that --> Should not change the existing folders/ files --> recommend to create new files if neccessary  

- When commiting codes, Hao should only commit changed files and MUST remove the css file to prevent the confliction when merging code