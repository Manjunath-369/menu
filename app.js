const menu = [
    {
    code : "snacks",
    name : "samosa",
    img : "pngegg (1).png",
    price : "30₹",
    content:"A popular Indian snack, the samosa is a deep-fried pastry filled with spiced mashed potatoes and peas. Its crispy exterior complements the flavorful, aromatic filling, making it a delicious and beloved choice, often served with mint chutney or tamarind sauce."
},{
    code : "meal",
    name : "Tandoori Roti with Baji",
    img : "pngegg (2).png",
    price : "300₹",
    content:"Tandoori Roti, a clay oven-baked flatbread, pairs exquisitely with Bhaji, a spiced vegetable curry. The soft, slightly crispy roti serves as a perfect vessel to scoop up the flavorful and aromatic Bhaji, creating a harmonious blend of textures and tastes."
},{
    code : "breakfast",
    name : "Masala Dosa",
    img : "pngegg (3).png",
    price : "70₹",
    content: "A South Indian classic, Masala Dosa is a thin, crispy rice crepe filled with a spiced potato mixture. The dosa is crafted from fermented rice and urad dal batter, resulting in a golden-brown delicacy that's both light and flavorful. Served with coconut chutney and tangy sambar, Masala Dosa is a beloved dish, offering a perfect balance of textures and a symphony of South Indian spices."

},{
    code : "snacks",
    name : "Burger",
    img : "pngegg (4).png",
    price : "100₹",
    content : "A quintessential American classic, the burger features a juicy grilled or fried patty made from beef, chicken, or plant-based alternatives. Sandwiched between soft, toasted buns, it's often topped with lettuce, tomato, cheese, pickles, and condiments like ketchup and mayo. The burger's customizable nature allows for a variety of flavors and styles, making it a versatile and beloved choice worldwide."
},{
    code : "breakfast",
    name : "Paper Dosa",
    img : "pngegg (5).png",
    price : "80₹",
    content : "Hailing from South India, the Paper Dosa is an incredibly thin and large rice crepe, resembling a delicate sheet of paper. Crispy and golden, it's typically served with coconut chutney and tangy sambar."
},{
    code : "meal",
    name : "Fried Rice",
    img : "pngegg (8).png",
    price : "90₹",
    content :"A savory and flavorful dish, fried rice is a staple in Asian cuisine. Cooked rice is stir-fried with a medley of vegetables, proteins like shrimp or chicken, and soy sauce. The result is a delightful combination of textures and tastes, with each grain of rice perfectly coated in savory flavors."
},{
    code : "meal",
    name : "South Indian Tali",
    img : "pngegg (7).png",
    price : "150₹",
    content : "A culinary extravaganza, the South Indian Thali is a platter that showcases a variety of traditional dishes from the region. It typically includes steamed rice, a selection of flavorful curries such as sambar and rasam, vegetable stir-fries, crispy papadum, cooling yogurt, and a variety of chutneys"
},{
    code : "meal",
    name : "Masali Rice",
    img : "pngegg (9).png",
    price : "170₹",
    content : "A classic Mexican delight, two tacos typically consist of soft or crispy tortillas filled with a variety of savory ingredients. Common fillings include seasoned meats like beef, chicken, or pork, topped with fresh salsa, shredded lettuce, cheese, and a dollop of sour cream or guacamole."
},{
    code : "breakfast",
    name : "Muesli Frosted Flakes Cereal",
    img : "pngegg (17).png",
    price : "170₹",
    content : "A wholesome and crunchy breakfast option, Muesli Frosted Flakes combines the goodness of muesli with the sweetness of frosted flakes. The cereal typically features a mix of rolled oats, dried fruits, nuts, and seeds, providing a hearty and nutritious base. The addition of frosted flakes brings a delightful sweetness and extra crunch to the mix. Enjoy it with milk or yogurt for a balanced and energizing start to your day."
},{
    code : "breakfast",
    name : "Baked Bean Tost",
    img : "pngegg (18).png",
    price : "100₹",
    content:"A classic and comforting dish, baked beans on toast features warm, savory baked beans served atop slices of toasted bread. The beans are often cooked in a rich tomato sauce with various seasonings, adding depth to the flavor. This simple yet satisfying meal is popular for breakfast or a quick, hearty snack"
},{
    code : "breakfast",
    name : "PanCake",
    img : "pngegg (19).png",
    price : "62₹",
    content : "A breakfast favorite, pancakes are light and fluffy griddle-cooked cakes made from a batter of flour, eggs, milk, and baking powder. Cooked until golden brown, pancakes are often served in a stack and can be customized with toppings like maple syrup, butter, fresh fruits, or whipped cream. "
},{
    code : "snacks",
    name : "Pizza HamBurger",
    img : "pngegg (16).png",
    price : "210₹",
    content : "A creative fusion of two beloved classics, the pizza hamburger features a burger patty sandwiched between two mini pizzas instead of traditional buns. The patty is often seasoned with Italian spices, and the pizzas may include classic toppings like marinara sauce, melted cheese, and additional ingredients like pepperoni or vegetables"
},{
    code : "snacks",
    name : " Margherita",
    img : "pngegg (10).png",
    price : "210₹",
    content : "A timeless Italian classic, the Margherita pizza is a minimalist masterpiece. It features a thin crust topped with simple yet exquisite ingredients: fresh mozzarella cheese, ripe tomatoes, fragrant basil leaves, and a drizzle of olive oil. The combination of these high-quality, few ingredients results in a harmonious burst of flavors"
},{
    code : "drinks",
    name : " Orange Juice",
    img : "pngegg (20).png",
    price : "40₹",
    content : "Freshly squeezed orange juice is a refreshing and invigorating beverage made from ripe oranges. Packed with vitamin C and a naturally sweet flavor, it offers a revitalizing start to the day or a delightful accompaniment to meals."
},{
    code : "drinks",
    name : "Coffee",
    img : "pngegg (14).png",
    price : "20₹",
    content : "A beloved pick-me-up, coffee is a brewed beverage made from roasted coffee beans. It comes in various forms like espresso, cappuccino, or a simple black coffee. Known for its rich aroma and stimulating effects, coffee is a favorite for those seeking a caffeinated boost."
},{
    code : "drinks",
    name : "Coco Cola",
    img : "pngegg (13).png",
    price : "30₹",
    content : "Coca-Cola, a popular carbonated soft drink, is known for its effervescence and sweet, cola-flavored taste. With its iconic red label, Coca-Cola is a globally recognized beverage that provides a satisfying and fizzy refreshment, perfect for various occasions."
}]

const buttons = ["ALL","BREAKFAST","MEALS","SNACKS","DRINKS"]
const button = document.querySelector(".filter-button")
const foodItems = document.querySelector(".hero");

buttons.forEach(element => {
    button.innerHTML += `<button class="${element.toLowerCase()}">${element}</button>`
});
const all = document.querySelector(".all")
const breakfast = document.querySelector(".breakfast")
const meal = document.querySelector(".meals")
const snacks = document.querySelector(".snacks")
const drinks = document.querySelector(".drinks")
display(menu);

breakMenu = menu.filter((element)=>{
    if(element.code === 'breakfast'){
        return element
    }
})
mealMenu = menu.filter((element)=>{
    if(element.code === 'meal'){
        return element
    }
})
snacksMenu = menu.filter((element)=>{
    if(element.code === 'snacks'){
        return element
    }
})
drinksMenu = menu.filter((element)=>{
    if(element.code === 'drinks'){
        return element
    }
})

all.onclick = ()=>display(menu)
breakfast.onclick = () => display(breakMenu);
snacks.onclick = () => display(snacksMenu);
meal.onclick = () => display(mealMenu);
drinks.onclick = () => display(drinksMenu);



function display(menuItems){

    foodItems.innerHTML = "";
    menuItems.forEach(element => {
        foodItems.innerHTML+= `<div class="menu-item">
        <div class="imag">
            <img src="${element.img}"alt="">
        </div>
        <div class="info">
            <div class="item-header">
                <h3>${element.name.toUpperCase()}</h3>
                <h4>${element.price}</h4>
            </div>
            <p>${element.content}</p>
        </div>`
         
    }); 
}

