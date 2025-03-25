import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // Create Users
    const user1 = await prisma.user.create({
        data: {
            username: 'alice123',
            email: 'alice@example.com',
            password: 'securepassword',
            phone: '123-456-7890',
            location: 'Bangkok, Thailand',
        },
    });

    const user2 = await prisma.user.create({
        data: {
            username: 'bob99',
            email: 'bob@example.com',
            password: 'anothersecurepassword',
            phone: '987-654-3210',
            location: 'Chiang Mai, Thailand',
        },
    });

    console.log('✅ Created Users:', { user1, user2 });

    // Create Items
    const item1 = await prisma.item.create({
        data: {
            title: 'iPhone 12',
            description: 'Used iPhone 12 in good condition',
            category: 'Electronics',
            imageUrl: 'https://example.com/iphone12.jpg',
            condition: 'Good',
            userId: user1.id,
        },
    });

    const item2 = await prisma.item.create({
        data: {
            title: 'MacBook Pro 2020',
            description: 'MacBook Pro with M1 chip',
            category: 'Laptops',
            imageUrl: 'https://example.com/macbook.jpg',
            condition: 'Excellent',
            userId: user2.id,
        },
    });

    console.log('✅ Created Items:', { item1, item2 });

    // Create a Trade Request
    const trade1 = await prisma.trade.create({
        data: {
            requesterId: user1.id,
            receiverId: user2.id,
            requesterItemId: item1.id,
            receiverItemId: item2.id,
            status: 'pending',
        },
    });

    console.log('✅ Created Trade Request:', trade1);

    console.log('🌱 Seeding completed!');
}

// Execute the script
main()
    .catch((error) => {
        console.error('❌ Error seeding database:', error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
