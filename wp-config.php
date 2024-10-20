<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '2^63Gg0BycZC$8MKK2wh(J[bHNr];2z@OX5QNc=;u*7pQ`?VFBc7D,)W%Zopj=MC' );
define( 'SECURE_AUTH_KEY',  '}e($=dX*}-z!cYQV&/I3*HqB64gG<DFZ5=V;g8ew=mg7DlDQ,n-1?e=tnMTcZEY#' );
define( 'LOGGED_IN_KEY',    '+#.Kr[Fk|Rtt8%$j!6#2VZ$=#SyO!TXQ}^7[lmRy[JbE2<DL_R]g2YzL`B&5g%_k' );
define( 'NONCE_KEY',        'sr;gnuP8H:Z4m(0NL4*8ll.HR)g~Im~hQBY)wgi~W>|$~;wU&/L6QrzJ&>s17P$2' );
define( 'AUTH_SALT',        'NRUJd19A+Ve{_H_NS|X)31%(P3]DOS/h^MLt9cBn<r:cP^EI9os$S|$MgZI-Nh6P' );
define( 'SECURE_AUTH_SALT', 'g6OYMs?%U__,*V$J8P0M6 t|u3O713(6LUFv.Ah&$]HAZGT7IDHLg,y<hS4a-y+*' );
define( 'LOGGED_IN_SALT',   'B!qa15-Q_Kdl+IR.XnJ@P~X 5S$1=kOb0!B;)ei9F>XivQ/$g]rPh85w]Kos3 *%' );
define( 'NONCE_SALT',       '*P0tAGy63jk_y.bgq3L{6`KM&,b{[5+(X{emU`9@&-!ENg2Pop#}Up(LntT^^OnY' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
