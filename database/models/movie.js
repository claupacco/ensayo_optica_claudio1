module.exports = (sequelize, dataTypes) => {

  let alias = "movies";
  let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        title: {

            type: dataTypes.STRING

        },


        length: {

            type: dataTypes.INTEGER
        },

        rating: {


            type: dataTypes.DECIMAL
        },


        awards: {


            type: dataTypes.INTEGER
        },



        release_date: {


            type: dataTypes.DATE
        }


  }


  let config = {
        tablename: "movies",
        timestamps: false,
        raw: true
  }

  const movie = sequelize.define(alias, cols, config);




  return movie;


}

