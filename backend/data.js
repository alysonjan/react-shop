import bcrypt from 'bcryptjs';
const data = {
    users: [{
            name: 'ajax',
            email: 'adminko@gmail.com',
            password: bcrypt.hashSync('admin123', 8),
            isAdmin: true,
        },
        {
            name: 'khaleed',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('user123', 8),
            isAdmin: false,
        }
    ],

    products: [{
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 20,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product OEM'
        },
        {
            name: 'Adidas Slim Shirt',
            category: 'Pants',
            image: '/images/p2.jpg',
            price: 120,
            countInStock: 50,
            brand: 'Adidas',
            rating: 1.5,
            numReviews: 5,
            description: 'low quality product OEM'
        },
        {
            name: 'Puma Slim Shirt',
            category: 'Sleeveless',
            image: '/images/p3.jpg',
            price: 120,
            countInStock: 40,
            brand: 'Puma',
            rating: 3.5,
            numReviews: 25,
            description: 'New product OEM'
        },
        {
            name: 'JOrdan Slim Shirt',
            category: 'T-Shirt',
            image: '/images/p4.jpg',
            price: 120,
            countInStock: 200,
            brand: 'Jordan',
            rating: 3.0,
            numReviews: 70,
            description: 'Original product'
        },
        {
            name: 'Under Armour Slim Shirt',
            category: 'Shirts',
            image: '/images/p5.jpg',
            price: 120,
            countInStock: 0,
            brand: 'Under Armour',
            rating: 2.0,
            numReviews: 8,
            description: 'high quality product OEM'
        },
        {
            name: 'New Balance Slim Shirt',
            category: 'Shirts',
            image: '/images/p6.jpg',
            price: 120,
            countInStock: 175,
            brand: 'New Balance',
            rating: 2.5,
            numReviews: 21,
            description: 'high quality product OEM'
        },
    ]
}

export default data;