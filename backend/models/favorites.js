const mongoose = require('mongoose');

const { Schema } = mongoose;

const favoriteSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    dishes: [{ type: Schema.Types.ObjectId, ref: 'Dish' }],
  },
  {
    timestamps: true,
    usePushEach: true,
  },
);

const Favorites = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorites;
