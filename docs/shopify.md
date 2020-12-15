# 1. Shopify

## 1.1. Solución de problemas

### Core

- [Migración de tiendas shopify](https://help.shopify.com/en/manual/migrating-to-shopify)

### Recursos

- [Guía completa de liquid](https://www.shopify.com/partners/shopify-cheat-sheet)

## 1.2. Recharge Payments

### Features

- Agregar estilos dependiendo de la url actual.

URL: https://www.facebook.com/home

Input:

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

Output:

```twig
<header>
  <ul>
    <li class="bg-primary">Home</li>
    <li class="">Account</li>
    <li class="">About</li>
  </ul>
</header>
```

- Realizar redirecciones correctamente.

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
