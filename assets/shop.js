var details = [...document.querySelectorAll('.nav')];
document.addEventListener('click', function(e) {
  if (!details.some(f => f.contains(e.target))) {
    details.forEach(f => f.removeAttribute('open'));
  } else {
    details.forEach(f => !f.contains(e.target) ? f.removeAttribute('open') : '');
  }
})

window.shop = {
    quantityAdjust(item,quantity) {
        if(quantity < 0) return;
        
        let update = {items:{}};
        update.items[item] = quantity;
        
        fetch("/cart_update", {
            method: "PUT",
            body: JSON.stringify(update),
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        }).then(res => {
            if (!res.ok) throw "failed to update quantity";
            location.reload();
        }).catch(err => {
            console.error(err);
            alert(err);
        });
    }
}
