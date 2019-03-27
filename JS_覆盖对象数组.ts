      // 原商品数组
      let goodslist = [{goodsid:110,name:"哈哈发500ml"},{goodsid:120,name:"凌凌漆800ml"}];
      // 最商品数组（商品有移除的可能）
      let newGoods = [{goodsid:110,name:"哈哈发500ml"},{goodsid:130,name:"凌凌发1800ml"}]
      // 之前goodslist的唯一goodsid
      let filterids = goodslist.map(item => { return item.goodsid });
      newGoods.forEach(goods => {
        // 存在时，通过序号取值直接覆盖
        let index = filterids.indexOf(goods.goodsid);
        if (index != -1) {
          let obj = goodslist[index];
          Object.assign(goods, obj);
        }
      });
      //获得最新商品数组
      goodslist = newGoods;
