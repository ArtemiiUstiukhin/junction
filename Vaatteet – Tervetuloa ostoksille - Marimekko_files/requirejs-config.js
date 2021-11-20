(function(require){
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    waitSeconds: 0,
    map: {
        '*': {
            'ko': 'knockoutjs/knockout',
            'knockout': 'knockoutjs/knockout',
            'mageUtils': 'mage/utils/main',
            'rjsResolver': 'mage/requirejs/resolver'
        }
    },
    shim: {
        'jquery/jquery-migrate': ['jquery'],
        'jquery/jstree/jquery.hotkeys': ['jquery'],
        'jquery/hover-intent': ['jquery'],
        'mage/adminhtml/backup': ['prototype'],
        'mage/captcha': ['prototype'],
        'mage/new-gallery': ['jquery'],
        'mage/webapi': ['jquery'],
        'jquery/ui': ['jquery'],
        'MutationObserver': ['es6-collections'],
        'matchMedia': {
            'exports': 'mediaCheck'
        },
        'magnifier/magnifier': ['jquery']
    },
    paths: {
        'jquery/validate': 'jquery/jquery.validate',
        'jquery/hover-intent': 'jquery/jquery.hoverIntent',
        'jquery/file-uploader': 'jquery/fileUploader/jquery.fileuploader',
        'prototype': 'legacy-build.min',
        'jquery/jquery-storageapi': 'jquery/jquery.storageapi.min',
        'text': 'mage/requirejs/text',
        'domReady': 'requirejs/domReady',
        'spectrum': 'jquery/spectrum/spectrum',
        'tinycolor': 'jquery/spectrum/tinycolor',
        'jquery-ui-modules': 'jquery/ui-modules'
    },
    deps: [
        'jquery/jquery-migrate'
    ],
    config: {
        mixins: {
            'jquery/jstree/jquery.jstree': {
                'mage/backend/jstree-mixin': true
            },
            'jquery': {
                'jquery/patches/jquery': true
            }
        },
        text: {
            'headers': {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    }
};

require(['jquery'], function ($) {
    'use strict';

    $.noConflict();
});

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'rowBuilder':             'Magento_Theme/js/row-builder',
            'toggleAdvanced':         'mage/toggle',
            'translateInline':        'mage/translate-inline',
            'sticky':                 'mage/sticky',
            'tabs':                   'mage/tabs',
            'zoom':                   'mage/zoom',
            'collapsible':            'mage/collapsible',
            'dropdownDialog':         'mage/dropdown',
            'dropdown':               'mage/dropdowns',
            'accordion':              'mage/accordion',
            'loader':                 'mage/loader',
            'tooltip':                'mage/tooltip',
            'deletableItem':          'mage/deletable-item',
            'itemTable':              'mage/item-table',
            'fieldsetControls':       'mage/fieldset-controls',
            'fieldsetResetControl':   'mage/fieldset-controls',
            'redirectUrl':            'mage/redirect-url',
            'loaderAjax':             'mage/loader',
            'menu':                   'mage/menu',
            'popupWindow':            'mage/popup-window',
            'validation':             'mage/validation/validation',
            'breadcrumbs':            'Magento_Theme/js/view/breadcrumbs',
            'jquery/ui':              'jquery/compat',
            'cookieStatus':           'Magento_Theme/js/cookie-status'
        }
    },
    deps: [
        'jquery/jquery.mobile.custom',
        'mage/common',
        'mage/dataPost',
        'mage/bootstrap'
    ],
    config: {
        mixins: {
            'Magento_Theme/js/view/breadcrumbs': {
                'Magento_Theme/js/view/add-home-breadcrumb': true
            },
            'jquery/ui-modules/dialog': {
                'jquery/patches/jquery-ui': true
            }
        }
    }
};

/* eslint-disable max-depth */
/**
 * Adds polyfills only for browser contexts which prevents bundlers from including them.
 */
if (typeof window !== 'undefined' && window.document) {
    /**
     * Polyfill localStorage and sessionStorage for browsers that do not support them.
     */
    try {
        if (!window.localStorage || !window.sessionStorage) {
            throw new Error();
        }

        localStorage.setItem('storage_test', 1);
        localStorage.removeItem('storage_test');
    } catch (e) {
        config.deps.push('mage/polyfill');
    }
}
/* eslint-enable max-depth */

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            checkoutBalance:    'Magento_Customer/js/checkout-balance',
            address:            'Magento_Customer/js/address',
            changeEmailPassword: 'Magento_Customer/js/change-email-password',
            passwordStrengthIndicator: 'Magento_Customer/js/password-strength-indicator',
            zxcvbn: 'Magento_Customer/js/zxcvbn',
            addressValidation: 'Magento_Customer/js/addressValidation',
            'Magento_Customer/address': 'Magento_Customer/js/address',
            'Magento_Customer/change-email-password': 'Magento_Customer/js/change-email-password'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            priceBox:             'Magento_Catalog/js/price-box',
            priceOptionDate:      'Magento_Catalog/js/price-option-date',
            priceOptionFile:      'Magento_Catalog/js/price-option-file',
            priceOptions:         'Magento_Catalog/js/price-options',
            priceUtils:           'Magento_Catalog/js/price-utils'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            compareList:            'Magento_Catalog/js/list',
            relatedProducts:        'Magento_Catalog/js/related-products',
            upsellProducts:         'Magento_Catalog/js/upsell-products',
            productListToolbarForm: 'Magento_Catalog/js/product/list/toolbar',
            catalogGallery:         'Magento_Catalog/js/gallery',
            catalogAddToCart:       'Magento_Catalog/js/catalog-add-to-cart'
        }
    },
    config: {
        mixins: {
            'Magento_Theme/js/view/breadcrumbs': {
                'Magento_Catalog/js/product/breadcrumbs': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            bundleOption:   'Magento_Bundle/bundle',
            priceBundle:    'Magento_Bundle/js/price-bundle',
            slide:          'Magento_Bundle/js/slide',
            productSummary: 'Magento_Bundle/js/product-summary'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            creditCardType: 'Magento_Payment/js/cc-type',
            'Magento_Payment/cc-type': 'Magento_Payment/js/cc-type'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            escaper: 'Magento_Security/js/escaper'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            quickSearch: 'Magento_Search/js/form-mini',
            'Magento_Search/form-mini': 'Magento_Search/js/form-mini'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftMessage:    'Magento_Sales/js/gift-message',
            ordersReturns:  'Magento_Sales/js/orders-returns',
            'Magento_Sales/gift-message':    'Magento_Sales/js/gift-message',
            'Magento_Sales/orders-returns':  'Magento_Sales/js/orders-returns'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            discountCode:           'Magento_Checkout/js/discount-codes',
            shoppingCart:           'Magento_Checkout/js/shopping-cart',
            regionUpdater:          'Magento_Checkout/js/region-updater',
            sidebar:                'Magento_Checkout/js/sidebar',
            checkoutLoader:         'Magento_Checkout/js/checkout-loader',
            checkoutData:           'Magento_Checkout/js/checkout-data',
            proceedToCheckout:      'Magento_Checkout/js/proceed-to-checkout',
            catalogAddToCart:       'Magento_Catalog/js/catalog-add-to-cart'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            addToCart: 'Magento_Msrp/js/msrp'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/select-payment-method': {
                'Magento_SalesRule/js/action/select-payment-method-mixin': true
            },
            'Magento_Checkout/js/model/shipping-save-processor': {
                'Magento_SalesRule/js/model/shipping-save-processor-mixin': true
            },
            'Magento_Checkout/js/action/place-order': {
                'Magento_SalesRule/js/model/place-order-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            captcha: 'Magento_Captcha/js/captcha',
            'Magento_Captcha/captcha': 'Magento_Captcha/js/captcha'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            fileElement: 'Magento_CustomerCustomAttributes/file-element'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    deps: [],
    shim: {
        'chartjs/Chart.min': ['moment'],
        'tiny_mce_4/tinymce.min': {
            exports: 'tinyMCE'
        }
    },
    paths: {
        'ui/template': 'Magento_Ui/templates'
    },
    map: {
        '*': {
            uiElement:      'Magento_Ui/js/lib/core/element/element',
            uiCollection:   'Magento_Ui/js/lib/core/collection',
            uiComponent:    'Magento_Ui/js/lib/core/collection',
            uiClass:        'Magento_Ui/js/lib/core/class',
            uiEvents:       'Magento_Ui/js/lib/core/events',
            uiRegistry:     'Magento_Ui/js/lib/registry/registry',
            consoleLogger:  'Magento_Ui/js/lib/logger/console-logger',
            uiLayout:       'Magento_Ui/js/core/renderer/layout',
            buttonAdapter:  'Magento_Ui/js/form/button-adapter',
            chartJs:        'chartjs/Chart.min',
            tinymce4:       'tiny_mce_4/tinymce.min',
            wysiwygAdapter: 'mage/adminhtml/wysiwyg/tiny_mce/tinymce4Adapter'
        }
    }
};

/**
 * Adds polyfills only for browser contexts which prevents bundlers from including them.
 */
if (typeof window !== 'undefined' && window.document) {
    /**
     * Polyfill Map and WeakMap for older browsers that do not support them.
     */
    if (typeof Map === 'undefined' || typeof WeakMap === 'undefined') {
        config.deps.push('es6-collections');
    }

    /**
     * Polyfill MutationObserver only for the browsers that do not support it.
     */
    if (typeof MutationObserver === 'undefined') {
        config.deps.push('MutationObserver');
    }

    /**
     * Polyfill FormData object for old browsers that don't have full support for it.
     */
    if (typeof FormData === 'undefined' || typeof FormData.prototype.get === 'undefined') {
        config.deps.push('FormData');
    }
}

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            downloadable: 'Magento_Downloadable/js/downloadable',
            'Magento_Downloadable/downloadable': 'Magento_Downloadable/js/downloadable'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            toggleGiftCard: 'Magento_GiftCard/toggle-gift-card'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            wishlist:       'Magento_Wishlist/js/wishlist',
            addToWishlist:  'Magento_Wishlist/js/add-to-wishlist',
            wishlistSearch: 'Magento_Wishlist/js/search'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            ticker:     'Magento_CatalogEvent/js/ticker',
            carousel:   'Magento_CatalogEvent/js/carousel'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            advancedSearch: 'Magento_GiftRegistry/advanced-search',
            giftRegistry: 'Magento_GiftRegistry/gift-registry',
            addressOption: 'Magento_GiftRegistry/address-option',
            searchByChanged: 'Magento_GiftRegistry/js/search-by-changed'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/place-order': {
                'Magento_CheckoutAgreements/js/model/place-order-mixin': true
            },
            'Magento_Checkout/js/action/set-payment-information': {
                'Magento_CheckoutAgreements/js/model/set-payment-information-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            configurable: 'Magento_ConfigurableProduct/js/configurable'
        }
    },
    config: {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Magento_ConfigurableProduct/js/catalog-add-to-cart-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            pageCache:  'Magento_PageCache/js/page-cache'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    paths: {
        'jquery/jquery-storageapi': 'Magento_Cookie/js/jquery.storageapi.extended'
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            requireCookie: 'Magento_Cookie/js/require-cookie',
            cookieNotices: 'Magento_Cookie/js/notices'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            orderBySkuFailure:  'Magento_AdvancedCheckout/js/order-by-sku-failure',
            fileChooser:        'Magento_AdvancedCheckout/js/file-chooser'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            catalogSearch: 'Magento_CatalogSearch/form-mini'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftCard:       'Magento_GiftCardAccount/js/gift-card',
            paymentMethod:  'Magento_GiftCardAccount/js/payment-method'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftOptions:    'Magento_GiftMessage/js/gift-options',
            extraOptions:   'Magento_GiftMessage/js/extra-options',
            'Magento_GiftMessage/gift-options':    'Magento_GiftMessage/js/gift-options',
            'Magento_GiftMessage/extra-options':   'Magento_GiftMessage/js/extra-options'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftWrapping: 'Magento_GiftWrapping/gift-wrapping'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            multiShipping: 'Magento_Multishipping/js/multi-shipping',
            orderOverview: 'Magento_Multishipping/js/overview',
            payment: 'Magento_Multishipping/js/payment',
            billingLoader: 'Magento_Checkout/js/checkout-loader',
            cartUpdate: 'Magento_Checkout/js/action/update-shopping-cart'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            recentlyViewedProducts: 'Magento_Reports/js/recently-viewed'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/quote': {
                'Magento_InventoryInStorePickupFrontend/js/model/quote-ext': true
            },
            'Magento_Checkout/js/view/shipping-information': {
                'Magento_InventoryInStorePickupFrontend/js/view/shipping-information-ext': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            multipleWishlist: 'Magento_MultipleWishlist/js/multiple-wishlist'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            subscriptionStatusResolver: 'Magento_Newsletter/js/subscription-status-resolver',
            newsletterSignUp:  'Magento_Newsletter/js/newsletter-sign-up'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'slick': 'Magento_PageBuilder/js/resource/slick/slick',
            'jarallax': 'Magento_PageBuilder/js/resource/jarallax/jarallax',
            'jarallaxVideo': 'Magento_PageBuilder/js/resource/jarallax/jarallax-video',
            'vimeo': 'Magento_PageBuilder/js/resource/vimeo/player',
            'vimeoWrapper': 'Magento_PageBuilder/js/resource/vimeo/vimeo-wrapper'
        }
    },
    shim: {
        'Magento_PageBuilder/js/resource/slick/slick': {
            deps: ['jquery']
        },
        'Magento_PageBuilder/js/resource/jarallax/jarallax-video': {
            deps: ['jarallax', 'vimeoWrapper']
        },
        'Magento_PageBuilder/js/resource/vimeo/player': {
            exports: ['Player']
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'taxToggle': 'Magento_Weee/js/tax-toggle',
            'Magento_Weee/tax-toggle': 'Magento_Weee/js/tax-toggle'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            orderReview: 'Magento_Paypal/js/order-review',
            'Magento_Paypal/order-review': 'Magento_Paypal/js/order-review',
            paypalCheckout: 'Magento_Paypal/js/paypal-checkout'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            transparent: 'Magento_Payment/js/transparent',
            'Magento_Payment/transparent': 'Magento_Payment/js/transparent'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Customer/js/customer-data': {
                'Magento_Persistent/js/view/customer-data-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            loadPlayer: 'Magento_ProductVideo/js/load-player',
            fotoramaVideoEvents: 'Magento_ProductVideo/js/fotorama-add-video-events'
        }
    },
    shim: {
        vimeoAPI: {}
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/*eslint strict: ["error", "global"]*/

'use strict';

var config = {
    config: {
        mixins: {
            'Magento_Ui/js/view/messages': {
                'Magento_ReCaptchaFrontendUi/js/ui-messages-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

// eslint-disable-next-line no-unused-vars
var config = {
    config: {
        mixins: {
            'Magento_Paypal/js/view/payment/method-renderer/payflowpro-method': {
                'Magento_ReCaptchaPaypal/js/payflowpro-method-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            removePoints: 'Magento_Reward/js/action/remove-points'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            rmaTrackInfo:   'Magento_Rma/rma-track-info',
            rmaCreate:      'Magento_Rma/rma-create'
        }
    },
    shim: {
        'Magento_Rma/rma-track-info': {
            deps: ['Magento_Rma/set-options']
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    shim: {
        cardinaljs: {
            exports: 'Cardinal'
        },
        cardinaljsSandbox: {
            exports: 'Cardinal'
        }
    },
    paths: {
        cardinaljsSandbox: 'https://includestest.ccdc02.com/cardinalcruise/v1/songbird',
        cardinaljs: 'https://songbird.cardinalcommerce.com/edge/v1/songbird'
    }
};


require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    shim: {
        'Magento_Tinymce3/tiny_mce/tiny_mce_src': {
            'exports': 'tinymce'
        }
    },
    map: {
        '*': {
            'tinymceDeprecated': 'Magento_Tinymce3/tiny_mce/tiny_mce_src'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            editTrigger: 'mage/edit-trigger',
            addClass: 'Magento_Translation/js/add-class',
            'Magento_Translation/add-class': 'Magento_Translation/js/add-class'
        }
    },
    deps: [
        'mage/translate-inline'
    ]
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            mageTranslationDictionary: 'Magento_Translation/js/mage-translation-dictionary'
        }
    },
    deps: [
        'mageTranslationDictionary'
    ]
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/payment/list': {
                'Magento_PaypalCaptcha/js/view/payment/list-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*jshint browser:true jquery:true*/
/*global alert*/
var config = {
    config: {
        mixins: {
            'Adyen_Payment/js/action/place-order': {
                'Magento_CheckoutAgreements/js/model/place-order-mixin': true
            }
        }
    },
    map: {
        '*': {
            'adyenCheckout':  'https://checkoutshopper-live.adyen.com/checkoutshopper/sdk/3.4.0/adyen.js',
            'adyenCheckout3101': 'https://checkoutshopper-live.adyen.com/checkoutshopper/sdk/3.10.1/adyen.js'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/shipping-rates-validation-rules': {
                'Amasty_Conditions/js/model/shipping-rates-validation-rules-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/summary/item/details/thumbnail': {  // Target module
                'Amasty_Promo/js/checkout/sidebar-image-update': true  // Extender module
            },
            'Magento_Checkout/js/view/summary/cart-items': {
                'Amasty_Promo/js/checkout/cart-items-counter-update': true
            },
            'Magento_Theme/js/view/messages' : {
                'Amasty_Promo/js/view/messages' : true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * ClassyLlama_AvaTax
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 *
 * @copyright  Copyright (c) 2016 Avalara, Inc.
 * @license    http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
 */
var config = {
    map: {
        '*': {
            addressValidationModal: 'ClassyLlama_AvaTax/js/view/address-validation-modal'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * ClassyLlama_AvaTax
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 *
 * @copyright  Copyright (c) 2016 Avalara, Inc.
 * @license    http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
 */

var config = {
    map: {
        '*': {
            "Magento_Checkout/js/model/shipping-save-processor/gift-registry": 'ClassyLlama_AvaTax/js/model/shipping-save-processor/gift-registry',
            "Magento_Tax/template/checkout/cart/totals/tax": 'ClassyLlama_AvaTax/template/checkout/cart/totals/tax',
            "Magento_Checkout/template/payment-methods/list": 'ClassyLlama_AvaTax/template/payment-methods/list',
            "Magento_Tax/template/checkout/summary/tax": 'ClassyLlama_AvaTax/template/checkout/summary/tax',
            multiShippingAddressValidation: 'ClassyLlama_AvaTax/js/multishipping-address-validation',
            // Add the following alias to provide compatibility with Magento 2.2
            addressValidation: 'ClassyLlama_AvaTax/js/addressValidation',
            deleteCertificate: 'ClassyLlama_AvaTax/js/delete-certificate'
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/view/payment/list': {
                'ClassyLlama_AvaTax/js/view/payment/list/certificates-link': true
            },
            'Magento_Tax/js/view/checkout/summary/tax': {
                'ClassyLlama_AvaTax/js/view/checkout/summary/tax/mixin': true,
                'ClassyLlama_AvaTax/js/view/payment/list/certificates-link': true
            },
            'Magento_Tax/js/view/checkout/cart/totals/tax': {
                'ClassyLlama_AvaTax/js/view/checkout/summary/tax/mixin': true
            },
            'Magento_Checkout/js/view/estimation': {
                // We can leverage the same login from the tax summary to determine if we have customs
                'ClassyLlama_AvaTax/js/view/checkout/summary/tax/mixin': true,
                'ClassyLlama_AvaTax/js/view/estimation/mixin': true
            },
            'Magento_Checkout/js/model/step-navigator': {
                'ClassyLlama_AvaTax/js/model/step-navigator/mixin': true
            },
            'ClassyLlama_AvaTax/js/action/account-add-exemption': {
                'ClassyLlama_AvaTax/js/customer-account-add-exemption': true
            },
            'Magento_Checkout/js/model/shipping-save-processor/default': {
                'ClassyLlama_AvaTax/js/model/shipping-save-processor/default': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 *  See COPYING.txt for license details.
 *
 *  @author    Improove Development i Stockholm AB
 *  @copyright Copyright (c) Improove Development i Stockholm AB. (https://www.improove.se)
 */

var config = {
    map: {
        '*': {
            'improove/dataPostAjax': 'Improove_AjaxDataPost/js/mage/dataPost/ajax',
            'improove/dataPostAjaxRegistry': 'Improove_AjaxDataPost/js/mage/dataPost/registry',
        }
    },
    deps: [
        'improove/dataPostAjax',
        'improove/dataPostAjaxRegistry'
    ],
    config: {
        mixins: {
            'mage/dataPost': {
                'Improove_AjaxDataPost/js/mage/dataPost/mixin': true
            }
        }
    }
};



require.config(config);
})();
(function() {

var config = {
    map: {
        '*': {
            'Magento_Checkout/js/view/shipping':
                'Improove_Checkout/js/view/shipping',
            'Magento_Checkout/js/action/select-shipping-address':
                'Improove_Checkout/js/action/select-shipping-address',
            'Magento_Checkout/js/model/shipping-rate-service':
                'Improove_Checkout/js/model/shipping-rate-service',
            'Magento_Checkout/js/model/shipping-rate-registry':
                'Improove_Checkout/js/model/shipping-rate-registry',
            'Magento_Checkout/js/model/full-screen-loader':
                'Improove_Checkout/js/model/full-screen-loader',
            'Magento_Checkout/js/model/shipping-save-processor/default':
                'Improove_Checkout/js/model/shipping-save-processor/default',
            'Magento_Checkout/js/model/totals':
                'Improove_Checkout/js/model/totals'
        }
    },
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/summary/abstract-total': {
                'Improove_Checkout/js/view/summary/abstract-total-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'Improove_Checkout/js/view/payment-mixin': true
            },
            'Magento_Checkout/js/view/form/element/email': {
                'Improove_Checkout/js/view/form/element/email-mixin': true
            },
            'Magento_Checkout/js/model/address-converter': {
                'Improove_Checkout/js/model/address-converter-mixin': true
            },
            'Magento_Checkout/js/model/step-navigator': {
                'Improove_Checkout/js/model/step-navigator-mixin': true
            },
            'Magento_Checkout/js/model/shipping-rates-validator': {
                'Improove_Checkout/js/model/shipping-rates-validator-mixin': true
            },
            'Magento_Checkout/js/model/checkout-data-resolver': {
                'Improove_Checkout/js/model/checkout-data-resolver-mixin': true
            },
            'Magento_Checkout/js/action/select-shipping-method': {
                'Improove_Checkout/js/action/select-shipping-method': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'siema': 'Improove_Theme/js/siema-mage-init',
            'classToggle': 'Improove_Theme/js/class-toggle',
            'improove/vimeoWidget': 'Improove_Theme/js/vimeo-widget'
        }
    },
    paths: {
        'Siema': 'Improove_Theme/js/vendor/siema.min'
    },
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'ecommTracker': 'Improove_GTM/js/ecomm-tracker',
            'productTileTracker': 'Improove_GTM/js/product-tile-tracker',
            'checkoutStepTracker': 'Improove_GTM/js/checkout-step-tracker'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            quickSearch: 'Klevu_Search/js/disableautosuggest'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright (c) 2018 Improove
 *
 * This file is part of Improove_Respizr.
 *
 * Improove_Respizr is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Improove_Respizr is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Improove_Respizr.  If not, see <http://www.gnu.org/licenses/>.
 */

var config = {
    paths: {
        'lazySizes': 'Improove_Respizr/js/lazysizes',
    },
    shim: {
        'lazySizes': {
            exports: 'lazySizes'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2020-present Improove Development i Stockholm AB.
 * This Program is free software: unless otherwise indicated within the source file, each source file included in this
 * distribution may be used under the terms of version 3 of the GNU Affero General Public License (AGPL-3.0) as published
 * by the Free Software Foundation.
 * This Program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 * You should have received a copy of the GNU Affero General Public License along with this Program.
 * If not, see <https://www.gnu.org/licenses/agpl-3.0.html>.
 */
var config = {
    map: {
        '*': {
            'improove/vimeoWidget': 'Marimekko_PageBuilder/js/vimeo-widget',
            'improove/scrollable': 'Marimekko_PageBuilder/js/improove/scrollable'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright (c) 2018-2019 Improove
 *
 * This file is part of Improove_Shipping.
 *
 * Improove_Shipping is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Improove_Shipping is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Improove_Shipping.  If not, see <http://www.gnu.org/licenses/>.
 */

var config = {
    'config': {
        'mixins': {
            'Magento_Checkout/js/model/shipping-save-processor/payload-extender': {
                'Improove_Shipping/js/model/shipping-save-processor/payload-extender-mixin': true
            },
            'Magento_Checkout/js/model/resource-url-manager': {
                'Improove_Shipping/js/model/resource-url-manager-mixin': true
            },
            'Magento_Checkout/js/view/summary/shipping': {
                'Improove_Shipping/js/view/shipping-title-mixin': true
            },
            'Magento_Checkout/js/view/shipping-information': {
                'Improove_Shipping/js/view/shipping-title-mixin': true
            },
            'Improove_Checkout/js/view/summary/essentials': {
                'Improove_Shipping/js/view/shipping-title-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'improove/ajaxSubscriptionAlert': 'Improove_SubscriptionAlert/js/improove/ajax-subscription-alert'
        }
    },
    'config': {
        'mixins': {
            'Magento_ConfigurableProduct/js/configurable': {
                'Improove_SubscriptionAlert/js/improove/configurable-mixin': true
            },
            'Magento_Swatches/js/swatch-renderer': {
                'Improove_SubscriptionAlert/js/improove/swatch-renderer-mixin': true
            }
        }
    }
};


require.config(config);
})();
(function() {
/**
 *  See COPYING.txt for license details.
 *
 *  @author    Improove Development i Stockholm AB
 *  @copyright Copyright (c) Improove Development i Stockholm AB. (https://www.improove.se)
 */

var config = {
    config: {
        mixins: {
            'Magento_Wishlist/js/add-to-wishlist': {
                'Improove_Wishlist/js/magento/wishlist/add-to-wishlist/mixin': true,
            },
            'Magento_MultipleWishlist/js/multiple-wishlist': {
                'Improove_Wishlist/js/magento/multiple-wishlist/multiple-wishlist/mixin': true,
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Itonomy BV. All rights reserved.
 * See LICENSE.md for license details.
 */

var config = {
    paths: {
        'lib-flowbox': 'https://connect.getflowbox.com/flowbox',
        'lib-flowbox-checkout': 'https://connect.getflowbox.com/bzfy-checkout',
    },
    shim: {
        'flowbox': {
            deps: ['lib-flowbox'],
            exports: 'default'
        },
        'flowbox-checkout': {
            deps: ['lib-flowbox-checkout'],
            exports: 'default'
        }
    },
    config: {
        text: {
            headers: {
                'X-Requested-With': 'XMLHttpRequest' // CORS
            }
        }
    },
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'Klarna_Kco/js/action/refresh-addresses': 'Improove_Kco/js/action/refresh-addresses',
            'Klarna_Kco/js/action/update-klarna-order': 'Improove_Kco/js/action/update-klarna-order',
            'Klarna_Kco/js/action/update-kss-status': 'Improove_Kco/js/action/update-kss-status',
            'Klarna_Kco/js/model/iframe': 'Improove_Kco/js/model/iframe'
        }
    },
    'config': {
        'mixins': {
            'Klarna_Kco/js/view/kco-view': {
                'Improove_Kco/js/view/kco-view-mixin': true
            },
            'Improove_Checkout/js/view/essentials': {
                'Improove_Kco/js/view/essentials-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * This file is part of the Klarna Onsitemessaging module
 *
 * (c) Klarna Bank AB (publ)
 *
 * For the full copyright and license information, please view the NOTICE
 * and LICENSE files that were distributed with this source code.
 */
var config = {
    config: {
        mixins: {
            "Magento_Catalog/js/price-box": {
                "Klarna_Onsitemessaging/js/pricebox-widget-mixin": true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright (c) 2017 Improove
 *
 * This file is part of Improove_Lux.
 *
 * Improove_Lux is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Improove_Lux is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Improove_Lux.  If not, see <http://www.gnu.org/licenses/>.
 */

var config = {
    map: {
        '*': {
            'klevu/base': 'Improove_KlevuFrontend/js/klevu-base',
            'klevu/quick': 'Improove_KlevuFrontend/js/quick/klevu-quick',
            'klevu/landing': 'Improove_KlevuFrontend/js/landing/klevu-landing',
            'klevu/facets': 'Improove_KlevuFrontend/js/landing/klevu-facets',
            'klevu/sort': 'Improove_KlevuFrontend/js/landing/klevu-sort'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Mageplaza
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the mageplaza.com license that is
 * available through the world-wide-web at this URL:
 * https://www.mageplaza.com/LICENSE.txt
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    Mageplaza
 * @package     Mageplaza_Core
 * @copyright   Copyright (c) Mageplaza (https://www.mageplaza.com/)
 * @license     https://www.mageplaza.com/LICENSE.txt
 */

var config = {
    paths: {
        'mageplaza/core/jquery/popup': 'Mageplaza_Core/js/jquery.magnific-popup.min',
        'mageplaza/core/owl.carousel': 'Mageplaza_Core/js/owl.carousel.min',
        'mageplaza/core/bootstrap': 'Mageplaza_Core/js/bootstrap.min',
        mpIonRangeSlider: 'Mageplaza_Core/js/ion.rangeSlider.min',
        touchPunch: 'Mageplaza_Core/js/jquery.ui.touch-punch.min',
        mpDevbridgeAutocomplete: 'Mageplaza_Core/js/jquery.autocomplete.min'
    },
    shim: {
        "mageplaza/core/jquery/popup": ["jquery"],
        "mageplaza/core/owl.carousel": ["jquery"],
        "mageplaza/core/bootstrap": ["jquery"],
        mpIonRangeSlider: ["jquery"],
        mpDevbridgeAutocomplete: ["jquery"],
        touchPunch: ['jquery', 'jquery/ui']
    }
};

require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'Adyen_Payment/js/view/payment/method-renderer/adyen-hpp-method': {
                'Marimekko_AfterPay/js/view/payment/method-render/adyen-hpp-method-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            'marimekko/snowplow': 'Marimekko_Analytics/js/snowplow'
        }
    },
    config: {
        mixins: {
            'Magento_Customer/js/customer-data': {
                'Marimekko_Analytics/js/view/customer-data-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    config: {
        mixins: {
            'Magento_Customer/js/action/login': {
                'Marimekko_CrmStorefront/js/action/login-mixin': true
            }
        }
    }
};



require.config(config);
})();
(function() {
/**
 * @copyright Copyright (c) Marimekko
 */
var config = {
    map: {
        '*': {
            'marimekko/maripediaPatternSearch' : 'Marimekko_Maripedia/js/pattern-search',
            'marimekko/maripediaCacheStorage' : 'Marimekko_Maripedia/js/model/cache-storage',
            'marimekko/wallpaperDownloadTracker': 'Marimekko_Maripedia/js/wallpaper-download-tracker'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            feedReport: 'Mirasvit_Feed/js/report'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * @copyright Copyright (c) Marimekko
 */
var config = {
    map: {
        '*': {
            'Magento_Checkout/js/view/shipping':
                'Marimekko_Checkout/js/view/shipping',
            'Magento_Checkout/js/proceed-to-checkout': 
                'Marimekko_Checkout/js/proceed-to-checkout'
        }
    },
    'config': {
        'mixins': {
            'Improove_Checkout/js/view/essentials': {
                'Marimekko_Checkout/js/view/essentials-mixin': true
            },
            'Magento_Checkout/js/model/address-converter': {
                'Marimekko_Checkout/js/model/address-converter-mixin': true
            },
            'Magento_Checkout/js/view/minicart': {
                'Marimekko_Checkout/js/view/minicart-mixin': true
            },
            'Improove_Checkout/js/view/minicart': {
                'Marimekko_Checkout/js/view/checkout-minicart-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    deps: [
        'Magento_Theme/js/theme'
    ]
};

require.config(config);
})();
(function() {
var config = {
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/payment': {
                'Magento_Checkout/js/view/is-ready-mixin': true
            },
            'Magento_Checkout/js/view/shipping': {
                'Magento_Checkout/js/view/is-ready-mixin': true
            },
            'Magento_Checkout/js/view/sidebar': {
                'Magento_Checkout/js/view/is-ready-mixin': true
            },
            'Magento_Checkout/js/model/step-navigator': {
                'Magento_Checkout/js/model/step-navigator-mixin': true
            },
        }
    }
};

require.config(config);
})();
(function() {

var config = {
    'config': {
        'mixins': {
            'Magento_Ui/js/form/element/post-code': {
                'Improove_Checkout/js/form/element/post-code-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright (c) 2017 Improove
 *
 * This file is part of Improove_Lux.
 *
 * Improove_Lux is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Improove_Lux is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Improove_Lux.  If not, see <http://www.gnu.org/licenses/>.
 */

var config = {
    paths: {
        'async': 'js/improove/requirejs/async'
    },
    map: {
        '*': {
            'improove/utils': 'js/improove/theme-utils',
            'improove/globalScroll': 'js/improove/global-scroll',
            'improove/states': 'js/improove/states',
            'improove/menu': 'js/improove/menu',
            'improove/treeNavSlider': 'js/improove/tree-nav-slider',
            'improove/quickshop': 'js/improove/quickshop',
            'improove/responsiveAccordion': 'js/improove/responsive-accordion',
            'improove/readMore': 'js/improove/read-more',
            'improove/gallery': 'js/improove/gallery',
            'improove/responsify': 'js/improove/responsify',
            'imagesLoaded': 'js/vendor/imagesloaded.pkgd.min',
            'improove/apply/main': 'js/improove/apply/main',
            'improove/apply': 'js/improove/apply',
            'improove/bootstrap': 'js/improove/bootstrap',
            'improove/dropdown': 'js/improove/dropdown',
            'improove/addState': 'js/improove/add-state',
            'improove/stickyish': 'js/improove/stickyish',
            'improove/imageZoom': 'js/improove/image-zoom',
            'improove/toggleContainer': 'js/improove/toggle-container',
            'improove/responsiveDetails': 'js/improove/responsive-details',
            'improove/responsiveTabs': 'js/improove/responsive-tabs',
            'improove/magnifyingGlass': 'js/improove/magnifying-glass',
        }
    },
    deps: [
        'improove/bootstrap'
    ],
    'config': {
        'mixins': {
            'Magento_Ui/js/lib/knockout/bindings/bootstrap': {
                'js/improove/knockout/bindings/bootstrap-mixin': true
            },
            'Magento_Catalog/js/price-box': {
                'Magento_Catalog/js/price-box-mixin': true
            },
            'Improove_Checkout/js/view/summary/essentials': {
                'Improove_Checkout/js/view/summary/essentials-mixin': true
            }
        }
    }
};

require.config(config);
})();



})(require);