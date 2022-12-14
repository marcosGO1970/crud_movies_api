const { Genre } = require("../../database/models/")
console.log("Pase x el genresController de la API")
const genresController = {

    list: async (req, res) => {
        try {
            const genres = await Genre.findAll();
           
            let respuesta = {
                meta: {
                    status: 200,
                    total: genres.length,
                    url: "api/genres"
                },
                data: {
                    genres
                }
            }

            return res.json(respuesta)
        } catch (error) {
            res.json(error.message)
        }
    },

    
    detail: async (req, res) => {
        try {
            const { id } = req.params
            const genre = await Genre.findByPk(id,{
                include: ['movies']
            });
            const genres = await Genre.findAll();
            let respuesta = {
                meta: {
                    status: 200,
                    total: genres.length,
                    url: "api/genres/detail/id"
                },
                data: {
                    genre
                }
            }

            return res.json(respuesta)
            //return res.render("./genres/genresDetail", { genre })
        } catch (error) {
            res.json(error.message)
        }
    }
};

module.exports = genresController;