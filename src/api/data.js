import React from 'react'
import Banana from '../assets/fruits_trending_search/banana.svg'
import Fortune_oil from '../assets/fruits_trending_search/fortune_oil.svg'
import Ashirwad_aata from '../assets/fruits_trending_search/ashirwad_aata.svg'
import Cart from '../assets/Account/cart.svg'
import Bell from '../assets/Account/bell.svg'
import Location from '../assets/Account/location.svg'
import Returns from '../assets/Account/returns.svg'
import Rupee from '../assets/Account/rupee.svg'
import Share from '../assets/Account/share.svg'
import Star from '../assets/Account/star.svg'
import Support from '../assets/Account/support.svg'
import Navigation_icon from '../assets/Account/navigate_icon.svg'
import Atta from '../assets/cart_product/atta.svg'
import Coconut from '../assets/cart_product/coconut.svg'
import Milk from '../assets/cart_product/milk.svg'
export const food_data = [
    {
        id:0,
        image: require('../assets/Product_icon/vegetable.png'),
        content:'Fruits & Vegetable',
        colors:'rgba(83, 177, 117, 0.1)',
        border_color:'rgba(83, 177, 117, 1)',
    },
    {
        id:1,
        image: require('../assets/Product_icon/dairy.png'),
        content:'Dairy, Bread & Eggs',
        colors:'rgba(248, 164, 76, 0.1)',
        border_color:'rgba(248, 164, 76, 1)',
        
    },
    {
        id:2,
        image: require('../assets/Product_icon/cooking.png'),
        content:'Cooking essentials',
        colors:'rgba(131, 106, 246, 0.15)',
        border_color:'rgba(131, 106, 246, 1)',
    },
    {
        id:3,
        image: require('../assets/Product_icon/vegetable.png'),
        content:'Fruits & Vegetable',
        colors:'rgba(131, 106, 246, 0.15)',
        border_color:'rgba(131, 106, 246, 1)',
    },
    {
        id:4,
        image: require('../assets/Product_icon/dairy.png'),
        content:'Dairy, Bread & Eggs',
        colors:'rgba(248, 164, 76, 0.1)',
        border_color:'rgba(248, 164, 76, 1)',
    },
    {
        id:5,
        image: require('../assets/Product_icon/cooking.png'),
        content:'Cooking essentials',
        colors:'rgba(83, 177, 117, 0.1)',
        border_color:'rgba(83, 177, 117, 1)',
    },
    {
        id:6,
        image: require('../assets/Product_icon/vegetable.png'),
        content:'Fruits & Vegetable',
        colors:'rgba(248, 164, 76, 0.1)',
        border_color:'rgba(248, 164, 76, 1)',
    },
    {
        id:7,
        image: require('../assets/Product_icon/dairy.png'),
        content:'Dairy, Bread & Eggs',
        colors:'rgba(83, 177, 117, 0.1)',
        border_color:'rgba(83, 177, 117, 1)',
    },
    {
        id:8,
        image: require('../assets/Product_icon/cooking.png'),
        content:'Cooking essentials',
        colors:'rgba(131, 106, 246, 0.15)',
        border_color:'rgba(131, 106, 246, 1)',
    },
    {
        id:9,
        image: require('../assets/Product_icon/vegetable.png'),
        content:'Fruits & Vegetable',
        colors:'rgba(83, 177, 117, 0.1)',
        border_color:'rgba(83, 177, 117, 1)',
    },
    {
        id:10,
        image: require('../assets/Product_icon/dairy.png'),
        content:'Dairy, Bread & Eggs',
        colors:'rgba(248, 164, 76, 0.1)',
        border_color:'rgba(248, 164, 76, 1)',
        
    },
    {
        id:11,
        image: require('../assets/Product_icon/cooking.png'),
        content:'Cooking essentials',
        colors:'rgba(131, 106, 246, 0.15)',
        border_color:'rgba(131, 106, 246, 1)',
    }
]

export const food_data_with_navigation = [
    {
        id:0,
        image: require('../assets/Product_icon/vegetable.png'),
        content:'Fruits & Vegetable',
        colors:'rgba(83, 177, 117, 0.1)',
        border_color:'rgba(83, 177, 117, 1)',
        navigation_key:'Vegetable_and_Dairy'
    },
    {
        id:1,
        image: require('../assets/Product_icon/meat.png'),
        content:'Eggs, Seafood & Meat',
        colors:'rgba(248, 164, 76, 0.1)',
        border_color:'rgba(248, 164, 76, 1)',
        navigation_key:'Vegetable_and_Dairy'
        
    },
    {
        id:2,
        image: require('../assets/Product_icon/cooking.png'),
        content:'Cooking essentials',
        colors:'rgba(131, 106, 246, 0.15)',
        border_color:'rgba(131, 106, 246, 1)',
        navigation_key:'Vegetable_and_Dairy'
    },
    {
        id:3,
        image: require('../assets/Product_icon/vegetable.png'),
        content:'Fruits & Vegetable',
        colors:'rgba(131, 106, 246, 0.15)',
        border_color:'rgba(131, 106, 246, 1)',
        navigation_key:'Vegetable_and_Dairy'
    },
    {
        id:4,
        image: require('../assets/Product_icon/beverage.png'),
        content:'Beverages',
        colors:'rgba(248, 164, 76, 0.1)',
        border_color:'rgba(248, 164, 76, 1)',
        navigation_key:'Vegetable_and_Dairy'
    },
    {
        id:5,
        image: require('../assets/Product_icon/cooking.png'),
        content:'Cooking essentials',
        colors:'rgba(83, 177, 117, 0.1)',
        border_color:'rgba(83, 177, 117, 1)',
        navigation_key:'Vegetable_and_Dairy'
    },
    {
        id:6,
        image: require('../assets/Product_icon/vegetable.png'),
        content:'Fruits & Vegetable',
        colors:'rgba(248, 164, 76, 0.1)',
        border_color:'rgba(248, 164, 76, 1)',
        navigation_key:'Vegetable_and_Dairy'
    },
    {
        id:7,
        image: require('../assets/Product_icon/dairy.png'),
        content:'Dairy, Bread & Eggs',
        colors:'rgba(83, 177, 117, 0.1)',
        border_color:'rgba(83, 177, 117, 1)',
        navigation_key:'Vegetable_and_Dairy'
    },
    {
        id:8,
        image: require('../assets/Product_icon/dairy_and_bread.png'),
        content:'Breakfast and essentials',
        colors:'rgba(131, 106, 246, 0.15)',
        border_color:'rgba(131, 106, 246, 1)',
        navigation_key:'Vegetable_and_Dairy'
    },
    {
        id:9,
        image: require('../assets/Product_icon/vegetable.png'),
        content:'Fruits & Vegetable',
        colors:'rgba(83, 177, 117, 0.1)',
        border_color:'rgba(83, 177, 117, 1)',
        navigation_key:'Vegetable_and_Dairy'
    },
    {
        id:10,
        image: require('../assets/Product_icon/dairy.png'),
        content:'Dairy, Bread & Eggs',
        colors:'rgba(248, 164, 76, 0.1)',
        border_color:'rgba(248, 164, 76, 1)',
        navigation_key:'Vegetable_and_Dairy'
        
    },
    {
        id:11,
        image: require('../assets/Product_icon/hygine.png'),
        content:'Personal Care & Cosmetics',
        colors:'rgba(131, 106, 246, 0.15)',
        border_color:'rgba(131, 106, 246, 1)',
        navigation_key:'Vegetable_and_Dairy'
    }
]


export const recent_search = [
    {
        id:1,
        searched_item:'Potato'
    },
    {
        id:2,
        searched_item:'Tomato'
    }

]

export const trending_search = [
    {
        id:1,
        trending_item:'Banana',
        picture:<Banana />,
        category:'Fruits & Vegetable'
    },
    {
        id:2,
        trending_item:'Oil',
        picture:<Fortune_oil />,
        category:'Cooking Essential'
    },
    {
        id:3,
        trending_item:'Ashirwad Atta',
        picture:<Ashirwad_aata />,
        category:'Breakfast and Essential'
    },
    

]

export const DATA = [
    {
        title:'My information',
        data:[
            {
                id:1,
                relative_image:<Cart />,
                content:'My Orders',
                right_arrows:<Navigation_icon />,
                navigate_route:'my_order'
            },
            {
                id:2,
                relative_image:<Location />,
                content:'My Address',
                right_arrows:<Navigation_icon />,
                navigate_route:'myAddress'
            },
            {
                id:3,
                relative_image:<Rupee />,
                content:'My Wallet & Payments',
                right_arrows:<Navigation_icon />,
                navigate_route:'walletAndPayment'
            },
            {
                id:4,
                relative_image:<Returns />,
                content:'Returns & Refunds',
                right_arrows:<Navigation_icon />,
                navigate_route:'account'
            },
            {
                id:5,
                relative_image:<Bell />,
                content:'Notifications',
                right_arrows:<Navigation_icon />,
                navigate_route:'account'
            },
        ]
    },
    {
        title:'Offers and Coupouns',
        data:[
            {
                id:1,
                relative_image:<Share />,
                content:'Share & Earn',
                right_arrows:<Navigation_icon />,
                navigate_route:'account'
            },
            {
                id:2,
                relative_image:<Rupee/>,
                content:'Offer & Coupon Zone',
                right_arrows:<Navigation_icon />,
                navigate_route:'account'
            },
        ]
    },

    {
        title:'Miscellaneous',
        data:[
            {
                id:1,
                relative_image:<Support />,
                content:'Customer Support',
                right_arrows:<Navigation_icon />,
                navigate_route:'account'
            },
            {
                id:2,
                relative_image:<Star />,
                content:'Rate Us',
                right_arrows:<Navigation_icon />,
                navigate_route:'account'
            },

            'About',
            'Legal Policies'
        ]
    },

]


export const  cart = [
    {
        id:1,
        item_name:'Nandini Tonned Milk',
        quantity:1,
        original_price:19,
        discounted_price:19,
        per_quantity:3,
        measurement_unit:'litre',
        picture:<Milk />,
        disable:false
    },
    {
        id:2,
        item_name:'Ashirwaad select atta',
        quantity:1,
        original_price:3315,
        discounted_price:2293,
        per_quantity:20,
        measurement_unit:'weight',
        picture:<Atta />,
        disable:false
    },
    {
        id:3,
        item_name:'coconut',
        quantity:1,
        original_price:50,
        discounted_price:40,
        per_quantity:2,
        measurement_unit:'piece',
        picture:<Coconut />,
        disable:false
    },
    {
        id:4,
        item_name:'coconut',
        quantity:1,
        original_price:50,
        discounted_price:40,
        per_quantity:2,
        measurement_unit:'piece',
        picture:<Coconut />,
        disable:false
    },
    {
        id:5,
        item_name:'coconut',
        quantity:1,
        original_price:50,
        discounted_price:40,
        per_quantity:2,
        measurement_unit:'piece',
        picture:<Coconut />,
        disable:false
    },
    {
        id:6,
        item_name:'Nandini Tonned Milk',
        quantity:1,
        original_price:19,
        discounted_price:19,
        per_quantity:3,
        measurement_unit:'litre',
        picture:<Milk />,
        disable:false
    },
]



export const frequently_bought_item = [
    {
        id:1,
        image: require('../assets/images/image_2.png'),
        content: 'Aashirvaad Superior MP Wheat Atta',
        colors:'#53B175',
        actual_amount: 109,
        discount_amount: 98,
        discount_perc: '10%',
        quantity:[{key:'2_1',value:'1 kg'},{key:'2_2',value:'2 kg'},{key:'2_3',value:'3 kg'},{key:'2_4',value:'4 kg'}],
        rating_perc: 4.3,
        rating_count: 62191,
        is_vegan: true,
        selectedDropdownValue: '1 kg',
        cartValue: 0,
    },
    {
        id:2,
        image: require('../assets/images/image_2.png'),
        content: 'Aashirvaad Superior MP Wheat Atta',
        colors:'#53B175',
        actual_amount: 109,
        discount_amount: 98,
        discount_perc: '10%',
        quantity:[{key:'2_1',value:'1 kg'},{key:'2_2',value:'2 kg'},{key:'2_3',value:'3 kg'},{key:'2_4',value:'4 kg'}],
        rating_perc: 4.3,
        rating_count: 62191,
        is_vegan: true,
        selectedDropdownValue: '1 kg',
        cartValue: 0,
    },
    {
        id:3,
        image: require('../assets/images/image_2.png'),
        content: 'Aashirvaad Superior MP Wheat Atta',
        colors:'#53B175',
        actual_amount: 109,
        discount_amount: 98,
        discount_perc: '10%',
        quantity:[{key:'2_1',value:'1 kg'},{key:'2_2',value:'2 kg'},{key:'2_3',value:'3 kg'},{key:'2_4',value:'4 kg'}],
        rating_perc: 4.3,
        rating_count: 62191,
        is_vegan: true,
        selectedDropdownValue: '1 kg',
        cartValue: 0,
    },
]

export const best_offers = [
    {
        id:1,
        image: require('../assets/images/image_2.png'),
        content: 'Aashirvaad Superior MP Wheat Atta',
        colors:'#53B175',
        actual_amount: 109,
        discount_amount: 98,
        discount_perc: '10%',
        quantity:[{key:'2_1',value:'1 kg'},{key:'2_2',value:'2 kg'},{key:'2_3',value:'3 kg'},{key:'2_4',value:'4 kg'}],
        rating_perc: 4.3,
        rating_count: 62191,
        is_vegan: true,
        selectedDropdownValue: '1 kg',
        cartValue: 0,
    },
    {
        id:2,
        image: require('../assets/images/image_2.png'),
        content: 'Aashirvaad Superior MP Wheat Atta',
        colors:'#53B175',
        actual_amount: 109,
        discount_amount: 98,
        discount_perc: '10%',
        quantity:[{key:'2_1',value:'1 kg'},{key:'2_2',value:'2 kg'},{key:'2_3',value:'3 kg'},{key:'2_4',value:'4 kg'}],
        rating_perc: 4.3,
        rating_count: 62191,
        is_vegan: true,
        selectedDropdownValue: '1 kg',
        cartValue: 0,
    },
    {
        id:3,
        image: require('../assets/images/image_2.png'),
        content: 'Aashirvaad Superior MP Wheat Atta',
        colors:'#53B175',
        actual_amount: 109,
        discount_amount: 98,
        discount_perc: '10%',
        quantity:[{key:'2_1',value:'1 kg'},{key:'2_2',value:'2 kg'},{key:'2_3',value:'3 kg'},{key:'2_4',value:'4 kg'}],
        rating_perc: 4.3,
        rating_count: 62191,
        is_vegan: true,
        selectedDropdownValue: '1 kg',
        cartValue: 0,
    },
]



export const categories_data = [
    {
      id: 1,
      image: require('../assets/images/image_1.png'),
      content: 'OPP Sooji 500gm Pouch',
      colors: '#53B175',
      actual_amount: 33,
      discount_amount: 19,
      discount_perc: '42%',
      quantity: [{ key: '1_1', value: '500 gm' }, { key: '1_2', value: '750 gm' }, { key: '1_3', value: '1 kg' }],
      rating_perc: 3.8,
      rating_count: 29108,
      is_vegan: false,
      selectedDropdownValue: '500 gm',
      cartValue: 0,
    },
    {
      id: 2,
      image: require('../assets/images/image_2.png'),
      content: 'Aashirvaad Superior MP Wheat Atta',
      colors: '#53B175',
      actual_amount: 109,
      discount_amount: 98,
      discount_perc: '10%',
      quantity: [{ key: '2_1', value: '1 kg' }, { key: '2_2', value: '2 kg' }, { key: '2_3', value: '3 kg' }, { key: '2_4', value: '4 kg' }],
      rating_perc: 4.3,
      rating_count: 62191,
      is_vegan: true,
      selectedDropdownValue: '1 kg',
      cartValue: 0,
    },
    {
      id: 3,
      image: require('../assets/images/image_3.png'),
      content: 'Aashirvaad Sharbati Select Atta',
      colors: '#53B175',
      actual_amount: 315,
      discount_amount: 293,
      discount_perc: '7%',
      quantity: [{ key: '3_1', value: '1 kg' }, { key: '3_2', value: '2 kg' }, { key: '3_3', value: '3 kg' },
      { key: '3_4', value: '4 kg' }, { key: '3_5', value: '5 kg' }, { key: '3_6', value: '6 kg' }],
      rating_perc: 3.8,
      rating_count: 29102,
      is_vegan: false,
      selectedDropdownValue: '5 kg',
      cartValue: 0,

    },

  ]

export const milk_data =  [
    {
        id:1,
        image: require('../assets/images/milk_1.png'),
        content:'Nandini Toned Milk (Polypack)',
        colors:'#53B175',
        actual_amount: null,
        discount_amount: 19,
        discount_perc: null, 
        quantity:[{key:'1',value:'500 ml'},{key:'2',value:'750 ml'},{key:'3',value:'1 lt'}],
        rating_perc: 4.3,
        rating_count: 62191,
        best_seller: true,
        selectedDropdownValue: '500 ml',
        cartValue: 0,
        
    },
    {
        id:2,
        image: require('../assets/images/milk_2.png'),
        content: 'Nandini Shubham Pasteurised Standardized Milk (Polypack)',
        colors:'#53B175',
        actual_amount: null,
        discount_amount: 22,
        discount_perc: null,
        quantity:[{key:'1',value:'500 ml'},{key:'2',value:'1 lt'},{key:'3',value:'2 lt'}],
        rating_perc: 3.8,
        rating_count: 29102,
        best_seller: false,
        selectedDropdownValue: '500ml',
        cartValue: 0,
    },
    {
        id:3,
        image: require('../assets/images/milk_3.png'),
        content:'Amul Taaza Toned Milk (Tetra Pak)',
        colors:'#53B175',
        actual_amount: null,
        discount_amount: 66,
        discount_perc: null,
        quantity:[{key:'1',value:'1 lt'},{key:'2',value:'2 lt'},{key:'3',value:'3 lt'}],
        rating_perc: 3.8,
        rating_count: 29102,
        best_seller: false,
        selectedDropdownValue: '1 lt',
        cartValue: 0,

    },

    {
        id:4,
        image: require('../assets/images/milk_4.png'),
        content:'Nivea Milk Delights Precious Saffron Face Wash (Normal Skin)',
        colors:'#53B175',
        actual_amount: 185,
        discount_amount: 139,
        discount_perc: '24%',
        quantity:[{key:'1',value:'100 ml'},{key:'2',value:'200 ml'},{key:'3',value:'300 ml'}],
        rating_perc: 3.8,
        rating_count: 29102,
        best_seller: false,
        selectedDropdownValue: '100 ml',
        cartValue: 0,
    },
    
]


export const my_list_data = [
    {
        id:1,
        image: require('../assets/images/colgate.png'),
        content:'Colgate Dental Cream 46 gm',
        colors:'#53B175',
        actual_amount: null,
        discount_amount: 20,
        discount_perc: null, 
        quantity:[{key:'1',value:'1 pc'},{key:'2',value:'2 pc'},{key:'3',value:'3 pc'}],
        rating_perc: 3.8,
        rating_count: 62191,
        best_seller: false,
        cartValue: 0,
        selectedDropdownValue: '1 pc'
    },
    {
        id:2,
        image: require('../assets/images/nivea.png'),
        content: 'Nivea Cream',
        colors:'#53B175',
        actual_amount: null,
        discount_amount: 19,
        discount_perc: null,
        quantity:[{key:'1',value:'100 ml'},{key:'2',value:'200 ml'},{key:'3',value:'300 ml'}],
        rating_perc: null,
        rating_count: null,
        best_seller: false,
        cartValue: 0,
        selectedDropdownValue: '200 ml',
    },

    
         
]

export const Address = [
    {
        id:1,
        name:'Home',
        content:"501, Sai Nidhi Residency, 27th cross road,HSR Layout, Sector 7, Bengaluru, Karnataka - 560068",
        options_icon:require('../assets/payment_screen/option_icon.png'),
    },
    {
        id:2,
        name:"Friend's Home",
        content:"#16/B, Ambalipura - Sarjapur Rd, Kaikondrahalli, Bengaluru, Karnataka 560035",
        options_icon:require('../assets/payment_screen/option_icon.png'),
    }
]

export const your_payment_methods = [
    {
        id:1,
        payment_type_image:require('../assets/payment_screen/gpay.png'),
        detail:'partha.borah@okhdfcbank'
    },
    {
        id:2,
        payment_type_image:require('../assets/payment_screen/mastercard.png'),
        detail:'4862 - XXXXXXXX - 1001'
    }
]

export const more_payment_methods = [
    {
        id: 1,
        card_image:require('../assets/payment_screen/creditdebit.png'),
        content:'Credit / Debit Card',
        arrow_image:require('../assets/payment_screen/rightsidearrow.png')


    },   {
        id: 2,
        card_image:require('../assets/payment_screen/upiwallet.png'),
        content:'UPI',
        arrow_image:require('../assets/payment_screen/rightsidearrow.png')


    },
    {
        id: 3,
        card_image:require('../assets/payment_screen/upiwallet.png'),
        content:'Wallet',
        arrow_image:require('../assets/payment_screen/rightsidearrow.png')


    },  {
        id: 4,
        card_image:require('../assets/payment_screen/cod.png'),
        content:'Cash On Delivery',
        arrow_image:require('../assets/payment_screen/rightsidearrow.png')


    }
]


