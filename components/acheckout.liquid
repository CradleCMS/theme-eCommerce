<script>
/* acheckout.js
 * CradleCMS Checkout helper component
 * version 1.0.1
 */
const checkoutCSS = new CSSStyleSheet()
checkoutCSS.replaceSync(`
.billing-check:checked + .billing-address {
    display: none;
}
.billing-check::after {
    content:"Billing address same as delivery address";
    position: absolute;
    top: 0.4em;
    left: 3em;
    width: 22em;
}
.fieldset-legend {
    padding-bottom: 2px;
    color: color-mix(in oklab, var(--color-base-content) 50%, transparent);
}
`)

class Checkout extends HTMLElement {
    connectedCallback() {
        document.adoptedStyleSheets = [checkoutCSS];
        const checkoutForm = document.getElementById("checkout-form");
        checkoutForm.addEventListener('change', function(e) {
            let el = e.target;
            if(el.name == "country" || el.name == "shipping" || el.name == "gateway") {
                const formData = new FormData(checkoutForm);
                fetch("/checkout/{{cart.id}}", {
                    method: "PUT",
                    body: JSON.stringify(Object.fromEntries(formData)),
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                }).then(res => {
                    if (!res.ok) throw res;
                    // reload with updated cart
                    location.reload();
                }).catch(err => {
                    console.error(err);
                    alert("update failed: " + err.message);
                });
            }
        });
    }
}
customElements.define('a-checkout', Checkout);
</script>
