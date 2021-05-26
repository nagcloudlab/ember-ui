import Model, { attr,hasMany } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr name;
  @attr description;
  @attr price;
  @attr features;
  @attr colors;
  @hasMany('comment') comments;
}
