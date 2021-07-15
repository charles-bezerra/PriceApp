const LogoSchema = {
    name: 'Logo',
    properties: {
        id: 'string',
        file_name: {type: 'string', indexed: true},
        file_size: 'int',
        height: 'int',
        width: 'int',
        type: 'string',
        uri: 'string',
    },
    primaryKey: 'id',
}

export default LogoSchema;                                                                                                                               