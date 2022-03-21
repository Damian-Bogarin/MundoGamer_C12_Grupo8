


const db = require('../database/models')
// llamamos a los modelos
const Products = db.Product
const UserPreferences = db.UserPreferences


//operador para los where
const Op = db.Sequelize.Op



const controller = {

    about: (req, res) => {
        res.render('about', {
            session: req.session
        })
    },

    terms: (req, res) => {
        res.render('terms', {
            session: req.session
        })
    }, 

    home: (req,res) => {

        if (req.session.user && req.session.user.rol == "ROL_USER" ) {

            let usersPreferences = []
            let usersPreferencestrue = []
            let usersPreferencesProducts = []
            let gendersPreferences = []
            let Off 

            UserPreferences.findAll({
                
                where: {userId: req.session.user.id },
                include: [{ association: 'gender'}]
            })
            .then((result)=> {
                //res.send(result)
               /*  // creo un array 
                1	RPG
                2	Accion
                3	Aventura
                4	Rol
                5	Deporte
                6	Simulacion
                7	Estrategia
                8	Supervivencia */
                let genders =[0,0,0,0,0,0,0,0]
                let gendersCopia
                let gendersMax
                for (let i = 0; i < genders.length + 1 ; i++) {
                    for (let j = 0; j < result.length; j++) {
                        if (result[j].genderId == (i + 1) ){
                            genders[i] += result[j].views
                        }
                        
                    }
                    
                }
                gendersCopia = genders.slice(0,9);
                genders.sort(function(a,b){return b - a});
                gendersMax = genders.slice(0,3)
                
                for (let i = 0; i < gendersMax.length; i++) {  
                    for (let j = 0; j < gendersCopia.length; j++) { 
                        if(gendersCopia[j] == gendersMax[i] && gendersMax[i] != 0 ){ usersPreferencestrue.push(j + 1)}
                    }
                }

                // Elimino los valores que se duplican
                usersPreferences = usersPreferencestrue.filter((item,index)=>{
                    return usersPreferencestrue.indexOf(item) === index;
                  })
            
                //Creo el Array para saber cuales son los genders
               for (let i = 0; i < usersPreferences.length; i++) {
                   switch (usersPreferences[i]) {
                       case 1:
                           gendersPreferences.push('RPG')
                           break;
                           case 2:
                            gendersPreferences.push('Accion')
                            break;
                            case 3:
                                gendersPreferences.push('Aventura')
                                break;
                                case 4:
                                    gendersPreferences.push('Rol')
                                    break;
                                    case 5:
                                        gendersPreferences.push('Deporte')
                                        break;
                                        case 6:
                                            gendersPreferences.push('Simulacion')
                                            break;
                                            case 7:
                                                gendersPreferences.push('Estrategia')
                                                break;
                                                case 8:
                                                    gendersPreferences.push('Supervivencia')
                                                    break;

                   
                       default:
                           break;
                   }
                   
               }
               
            })
            .then((result) =>{
                Products.findAll( {
                    limit: 5,
                    where: {descount: {[Op.gt]: 0}},
                    include: [{ association: 'gender'} ,
                            {association: 'clasification'},
                        {association: 'compatibility'},
                        {association: 'language'},
                        {association: 'subtitle'},
                        {association: 'multiplayer'}
                     ] 
                    
                           
                        
                    
                })
                .then((Offert)=>{
                      
                    Off = Offert
                    for (let i = 0; i < usersPreferences.length; i++) {
                        
                        usersPreferencesProducts.push(Products.findAll({
                            limit: 5,
                            where: {genderId: usersPreferences[i]},
                            include: [{ association: 'gender'} ,
                                    {association: 'clasification'},
                                {association: 'compatibility'},
                                {association: 'language'},
                                {association: 'subtitle'},
                                {association: 'multiplayer'}
                             ] 
                            
                                   
                                
                            
                        })) 
                    }
                    
                    Promise.all(usersPreferencesProducts).then((value)=>{
                        usersPreferences = usersPreferences.slice(0,3)
                        gendersPreferences = gendersPreferences.slice(0,3)
                        res.render('home2', {Off, session: req.session,usersPreferences,value,gendersPreferences})
                        //res.send({Off,usersPreferences,value,gendersPreferences})
                    }
                    )
            })

            })

        }
        else{
        Products.findAll( {
            limit: 5,
            where: {descount: {[Op.gt]: 0}},
            include: [{ association: 'gender'} ,
                    {association: 'clasification'},
                {association: 'compatibility'},
                {association: 'language'},
                {association: 'subtitle'},
                {association: 'multiplayer'}
             ] 
            
                   
                
            
        })
        .then((Off)=>{
            //res.send(Off)
            res.render('home2', {Off, session: req.session})
        })
        
    }
               }
    

}



module.exports = controller;