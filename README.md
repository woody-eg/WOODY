# WOODY – Modern Furniture & Decor

Static store (HTML/CSS/JS). Open `index.html` or deploy with GitHub Pages (Settings > Pages > main / root).

Edit products in `js/app.js` (`P`, `FIN`, `SZ`). Images live in `images/`.

## Settings, language & accounts

* **Language (EN/AR) and Website Notifications** work with no backend. Preferences are saved in the browser. Translations live in `js/i18n.js`; anything not listed there (brand, product names) stays English.
* **Saved address:** guests: stored only on their own device (`localStorage`), and only when they press *Save address* or tick *Save my address for future orders*. Logged-in customers: stored in the database against their own account.
* **Login / Sign Up / Google / GitHub** use [Supabase Auth](https://supabase.com) (secure sessions, hashed passwords; this site never stores passwords). Until you configure it, the forms show a clear "not set up" message and nothing is faked.

### One-time setup
1. Create a free Supabase project. In **SQL Editor** run `supabase/schema.sql` (creates the `addresses` table with per-user Row Level Security).
2. Put **Project URL** and **anon public key** (Project Settings > API) into `js/config.js`.
3. **Authentication > URL Configuration:** set *Site URL* to your GitHub Pages address (e.g. `https://USERNAME.github.io/REPO/`) and add the same URL under *Redirect URLs*.
4. **Google:** in Google Cloud Console > APIs & Services > Credentials, create an *OAuth client ID* (Web). Add **Authorized redirect URI** `https://<PROJECT-REF>.supabase.co/auth/v1/callback`. Paste the Client ID and Secret into Supabase > Authentication > Providers > Google.
5. **GitHub:** GitHub > Settings > Developer settings > OAuth Apps > New. *Homepage URL* = your site URL; *Authorization callback URL* = `https://<PROJECT-REF>.supabase.co/auth/v1/callback`. Paste Client ID and Secret into Supabase > Providers > GitHub.
6. Email sign-up sends a confirmation email by default (Supabase > Authentication > Providers > Email).
