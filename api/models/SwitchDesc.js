//Desc Stats

module.export = {
	identity: 'switchdesc',

	connection: ['util'],

	attributes: {
         DPID: {
            type: 'string',
            required: true,
            primaryKey: true,
            unique: true,
             //index: true
        },
		Manufacturer: {
            type:'string',
            required:'true'
        },
        Hardware:{
            type:'string',
            required:'true'
        },
        Software:{
            type:'string',
            required:'true'
        },
        SerialNum:{
            type:'string',
            required:'true'
        },
        /*Datapath:{
            type:'string',
            required:'true'
        },*/
	}
}