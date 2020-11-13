'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Property', [
      {
        id: 1,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        price: 2143.00,
        bedrooms: 4,
        bathrooms: 2,
        area: 890,
        place: 4,
        animal: true,
        type: "Apartamento",
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        title: "Condimentum id venenatis a condimentum vitae",
        description: "Condimentum id venenatis a condimentum vitae. Convallis a cras semper auctor. Quisque egestas diam in arcu cursus. Aliquam ultrices sagittis orci a scelerisque purus semper",
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        price: 1670.90,
        bedrooms: 3,
        bathrooms: 2,
        area: 678,
        place: 3,
        animal: true,
        type: "Apartamento",
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        title: "Sagittis id consectetur purus ut faucibus pulvinar elementum intege",
        description: "Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quam vulputate dignissim suspendisse in est. Molestie nunc non blandit massa",
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        price: 980.00,
        bedrooms: 2,
        bathrooms: 1,
        area: 325,
        place: 2,
        animal: false,
        type: "Casa",
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        title: "Facilisi etiam dignissim diam quis",
        description: "Facilisi etiam dignissim diam quis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Quam adipiscing vitae proin sagittis nisl. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Euismod quis viverra nibh cras pulvinar mattis nunc sed",
        street: "Av. João de Camargo",
        neighborhood: "Centro",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        price: 2458.68,
        bedrooms: 5,
        bathrooms: 2,
        area: 1250,
        place: 5,
        animal: false,
        type: "Casa de Condomínio",
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Property', null, {});
  }
}
