<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'vito-info' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Pu.ga|89z>|o3E+9^CO.A0=w}5r4XT:j<2IBY}o(j4zV,^$kPz@3+{)@8(yKK(J-' );
define( 'SECURE_AUTH_KEY',  'FHClYIsgrkvMXH=[M!Pg,pdf0sf1XPl1aEg_VkZh%3/f)USeciyDqn<8wu!I1}ek' );
define( 'LOGGED_IN_KEY',    'QJw)dwK5^@P xoi#`7lFGx4WSD~`GkwBJR#]*d/5UC.fvY={_X0!.[yUd{hno1hN' );
define( 'NONCE_KEY',        '<bq[{v33*q&<vG(MEK%^d$q??benf.%IbLK~8h.CY;C@F^.(r2Q_SKM! LabM}>M' );
define( 'AUTH_SALT',        '/aGWOI?^7r G6WY!afdpp95:^FX[*,5>.pIFmP: ]!ZXHwh}o*^YlR;)sV72-c-2' );
define( 'SECURE_AUTH_SALT', '^n[7W}>{{,X<x&pCw{;!AK=cl6J}t15=B@Aa~cxeH)[s_]#AU2ru5cfdU?2kJ.Bf' );
define( 'LOGGED_IN_SALT',   '.sed6.m,N556VGe!EN6wT#}ra/aoupD9rw37+,{5SrXZ.;{f`hvSY}]Dz6V}v9o_' );
define( 'NONCE_SALT',       'i_nug:>B*_xF|e~b*7|s8-mx|UMxIM#96of`Q=LM=;{4f7H{*Me9h&$c<zwtzXxW' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
