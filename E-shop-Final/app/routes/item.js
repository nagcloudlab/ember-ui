import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ItemRoute extends Route {
  @service store;

  async model(params) {
    const { item_id } = params;
    const data = await this.store.findAll("product");
    const product = data.find(({ id }) => id === item_id);

    // const comments = await product.get("comments");

    return { product, comments: [{ author: "Nag", text: "worth to buy" }] };
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.color = model.product.colors[0].color;
  }
}
