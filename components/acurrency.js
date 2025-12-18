<script>
/* acurrency.js
 * CradleCMS currency switcher component
 * version 1.0.0
 */

class Currency extends HTMLElement {
    #target
    connectedCallback() {
        this.#target = this.firstElementChild;
        if(!this.#target) {
            this.#target = document.getElementById('currency-select');
        }
        this.#target.addEventListener('change',(ev) => {
            const currency = ev.target.value;
            if(!currency) return;
            let update = {currency};
            fetch(`/cart_update`, {
                method: "PUT",
                body: JSON.stringify(update),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                credentials: "include",
            }).then(res => {
            console.log("res", res);
                if (!res.ok) throw res;
                return res.json();
            }).then(res => {
                location.reload();
            }).catch(err => {
                console.error(err);
            });
        });
    }
}
customElements.define('a-currency', Currency);
</script>
