const router = require("express").Router();
const { Order, Product } = require("../db/models");
module.exports = router;

router.get("/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const order = await Order.findOne({
      where: {
        userId: req.user.id,
        bought: false
      }
    });
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
});

router.get("/:userId/history", async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const pastOrders = await Order.findAll({
      where: {
        userId: req.user.id,
        bought: true
      },
      include: [{ model: Product }]
    });
    res.status(200).json(pastOrders);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const userId = req.body.userId;
    const newOrder = await Order.create({
      userId: req.user.id,
      bought: false
    });
    res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
});

router.put("/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const completedOrder = await Order.update(
      {
        bought: true
      },
      {
        where: {
          userId: req.user.id,
          bought: false
        },
        returning: true,
        plain: true
      }
    );
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});
