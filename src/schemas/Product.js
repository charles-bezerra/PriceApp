const ProductSchema = {
    name: "Product",
    properties: {
        title: {type: "string", indexed: true},
        description: "string",
        barcode: {type: "string", indexed: true},
        price: {type: "string", default: "0.0"},
        category: "string",
        created_at: "string",
        updated_at: "string",
    },
    primaryKey: "barcode",
}

export default ProductSchema;                                                                                                                               