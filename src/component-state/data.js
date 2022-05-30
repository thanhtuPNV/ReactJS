// function Category_data() {
//     const category = [
//         {
//             idcategory: 1,
//             tittle: "Pots",
//             description: "MoMA Design Store"
//         },
//         {
//             idcategory: 2,
//             tittle: "Clothes",
//             description: "MoMA Design Store"
//         },
//         {
//             idcategory: 3,
//             tittle: "Furniture",
//             description: "MoMA Design Store"
//         }
//     ];
//     return category;
// }

// function product_data() {
//     const product= [
//         {
//             name: "OMAR/RAAWII VASE",
//             img: "https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwaa640c19/images/158767_a.jpg?sw=234&sh=234&sm=cut",
//             detail: "MoMA Design Store",
//             idcategory: 1
//         },
//         {
//             name: "Champion Hoodie-MOMA Edition",
//             img: "https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwcb119365/images/146494_a.jpg?sw=234&sh=234&sm=cut",
//             detail: "MoMA Design Store",
//             idcategory: 2
//         },
//         {
//             name: "OMAR/RAAWII CARAFE",
//             img: "https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw4d0f913c/images/158889_a.jpg?sw=234&sh=234&sm=cut",
//             detail: "MoMA Design Store",
//             idcategory: 1
//         },
//         {
//             name: "Roland Kiyola Piano in Oak Wood-Model KF-10",
//             img: "https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw9cf02482/images/200225_a.jpg?sw=234&sh=234&sm=cut",
//             detail: "MoMA Design Store",
//             idcategory: 3
//         },
//         {
//             name: "SELF-WATERING WET POST",
//             img: "https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwd05b31bf/images/801501_a.jpg?sw=234&sh=234&sm=cut",
//             detail: "MoMA Design Store",
//             idcategory: 1
//         },
//         {
//             name: "Champion Crewneck Sweatshirt-MOMA Edition",
//             img: "https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwe55444cd/images/400613_a.jpg?sw=234&sh=234&sm=cut",
//             detail: "MoMA Design Store",
//             idcategory: 2
//         },
//         {
//             name: "5-Drawer Pivot Cabinet",
//             img: "https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw94d9b6a4/images/157242_a.jpg?sw=234&sh=234&sm=cut",
//             detail: "MoMA Design Store",
//             idcategory: 3
//         }
//     ];
//     return product
// }

function Products_data(dataName){
    switch (dataName) {
        case "categories":
            const categories = [
                {
                    categories : 1,
                    name :"Pots"
                },
                {
                    categories : 2,
                    name :"Clothes"
                },
                {
                    categories : 3,
                    name :"Furniture"
                }
            ]
            return categories;
    
        case "products":
            const products=[
                {
                    IdCategories: 1,
                    name:"OMAR/RAAWII VASE",
                    img: "https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwaa640c19/images/158767_a.jpg?sw=234&sh=234&sm=cut",
                    detail:"MoMA Design Store"
                },
                {
                    IdCategories: 2,
                    name:"Champion Hoodie-MOMA Edition",
                    img: "https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwcb119365/images/146494_a.jpg?sw=234&sh=234&sm=cut",
                    detail:"MoMA Design Store"
                },
                {
                    IdCategories: 1,
                    name:"OMAR/RAAWII CARAFE",
                    img: "https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw4d0f913c/images/158889_a.jpg?sw=234&sh=234&sm=cut",
                    detail:"MoMA Design Store"
                },
                {
                    IdCategories: 3,
                    name:"Roland Kiyola Piano in Oak Wood-Model KF-10",
                    img: "https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw9cf02482/images/200225_a.jpg?sw=234&sh=234&sm=cut",
                    detail:"MoMA Design Store"
                },{
                    IdCategories: 1,
                    name:"SELF-WATERING WET POST",
                    img: "https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwd05b31bf/images/801501_a.jpg?sw=234&sh=234&sm=cut",
                    detail:"MoMA Design Store"
                },{
                    IdCategories: 2,
                    name:"Champion Crewneck Sweatshirt-MOMA Edition",
                    img: "https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dwe55444cd/images/400613_a.jpg?sw=234&sh=234&sm=cut",
                    detail:"MoMA Design Store"
                },{
                    IdCategories: 3,
                    name:"5-Drawer Pivot Cabinet",
                    img: "https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw94d9b6a4/images/157242_a.jpg?sw=234&sh=234&sm=cut",
                    detail:"MoMA Design Store"
                }
            ]
            return products;
        default: return []
    }
}

export default Products_data;

// export {Product_data, Category_data};
