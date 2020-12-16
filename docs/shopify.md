# 1. Shopify

## 1.1. Solución de problemas

### Core

- [Migración de tiendas shopify](https://help.shopify.com/en/manual/migrating-to-shopify)

### Recursos

- [Guía completa de liquid](https://www.shopify.com/partners/shopify-cheat-sheet)

## 1.2. Recharge Payments

### Features

#### Agregar estilos dependiendo de la url actual.

- URL: https://www.facebook.com/home

- Input:

```twig
<header>
  <ul>
    <li class="
      {% raw %}
        {% if canonical_url contains 'home' %}
          bg-primary
        {% endif %}
      {% endraw %}"
    >
      Home
    </li>
    <li class="
      {% raw %}
        {% if canonical_url contains 'profile' %}
          bg-primary
        {% endif %}
      {% endraw %}"
    >
      Account
    </li>
    <li class="
      {% raw %}
        {% if canonical_url contains 'aboutme' %}
          bg-primary
        {% endif %}
      {% endraw %}"
    >
      About
    </li>
  </ul>
</header>
```

- Output:

```twig
<header>
  <ul>
    <li class="bg-primary">Home</li>
    <li class="">Account</li>
    <li class="">About</li>
  </ul>
</header>
```

#### Redireciones al hacer submit

Lo primero que debemos tener en cuenta es que por defecto ReCharge tiene unos métodos en el archivo _assets/\_scripts.js_ que nos ayudan a realizar este tipo de redirecciones. Sólo es necesario seguir los siguientes pasos para hacer una redirección exitosa.

1. El formulario debe tener un id que comience con _"ReChargeForm\_"_:
   ```html
   <form action="{{ my_url }}" method="POST" id="ReChargeForm_myform">
     /.../
   </form>
   ```
2. Debe existir un button dentro del formulario. Si sólo hay un button dentro del formulario por defecto este button es tipo submit. Si hay más de un button se debe colocar explicitamente el _"type='submit'"_.
   ```html
   <form action="{{ my_url }}" method="POST" id="ReChargeForm_myform">
     /.../
     <button type="submit">Submit</button>
   </form>
   ```
3. Por último debemos tener un input de tipo _hidden_ con name='redirect_url' y con el valor de la url a la que se quiere redirigir al tener éxito en el submit.
   ```html
   <form action="{{ my_url }}" method="POST" id="ReChargeForm_myform">
     <input name="redirect_url" value="{{ my_redirect_url }}" type="hidden" />
     /.../
     <button type="submit">Submit</button>
   </form>
   ```
4. Por último hay que tener en cuenta que en algunas ocaciones ReCharge tiene propiedades que son requeridas para que se pueda realizar con éxito el envio de los datos.

   Un ejemplo es que para [crear una suscribción](https://theme.rechargepayments.com/v2/#post-create-subscription) se deben enviar los siguientes datos obligatoriamente:

   - Shopify variant ID
   - Order interval frequency
   - Order interval unit
   - Charge interval frequency
   - Next charge date
   - Address ID
   - Quantity

   ```html
   <form action="{{ my_url }}" method="POST" id="ReChargeForm_myform">
     <!-- Redirect -->
     <input name="redirect_url" value="{{ my_redirect_url }}" type="hidden" />

     <input
       name="shopify_variant_url"
       value="{{ shopify_variant_id }}"
       type="hidden"
     />

     <input
       name="order_interval_frequency"
       value="30"
       placeholder="Order interval frequency"
     />

     <input
       name="order_interval_unit"
       value="Days"
       placeholder="Order interval unit"
       type="text"
     />

     <input
       name="charge_interval_frequency"
       value="30"
       placeholder="Charge interval frequency"
     />

     <input
       name="next_charge_scheduled_at"
       value="2020-12-17"
       placeholder="Next charge date"
       type="date"
     />

     <input name="address_id" value="{{ address_id }}" type="hidden" />

     <input name="quantity" placeholder="Quantity" type="number" />

     <!-- Submit button -->
     <button type="submit">Submit</button>
   </form>
   ```

### Configuraciones

- [Crear reglas de suscripción](https://support.rechargepayments.com/hc/en-us/articles/360008830873-Getting-Started-with-Subscriptions)
- [Personalizar checkout](https://support.rechargepayments.com/hc/en-us/articles/360008682954)
- [Agregar estilos al checkout](https://support.rechargepayments.com/hc/en-us/articles/360008830513-Customizing-CSS-styles-on-ReCharge-and-checkout)
- [Crear reglas de suscripción](https://support.rechargepayments.com/hc/en-us/articles/360008830873-Getting-Started-with-Subscriptions)
- [Crear reglas para productos de suscripcion en modo regalo](https://support.rechargepayments.com/hc/en-us/articles/360008683714-Prepaid-Gift-Subscriptions-Setup)
- [Crear flujos personalizados para productos de suscripcion pre y post compra con recharge workflows](https://support.rechargepayments.com/hc/en-us/articles/360008683754-ReCharge-Workflows)
- [Personalizar notificaciones](https://support.rechargepayments.com/hc/en-us/articles/360006356293-Notifications-)

### Solucion problemas

- [Siempre que se instale recharge payments se debe insertar manualmente en los scripts del tema los siguientes codigos](https://support.rechargepayments.com/hc/en-us/articles/360008830653-Installing-the-ReCharge-integration-manually)
- [Usar propiedades de producto personalizadas](https://support.rechargepayments.com/hc/en-us/articles/360008830733-Using-custom-line-item-properties)
- [Agregar producto de suscripcion al carrito con ajax](https://support.rechargepayments.com/hc/en-us/articles/360008683774-Adding-an-item-to-the-cart-with-AJAX)
- [Agregar reglas de suscripcion para variables especificas del producto](https://support.rechargepayments.com/hc/en-us/articles/360008830373-Offering-the-subscription-option-on-specific-variants)
