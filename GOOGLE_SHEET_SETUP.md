# Connect the contact form to Google Sheets

Every time someone submits the contact form, a new row is added to your
Google Sheet. No server or paid service needed — it uses a free **Google
Apps Script Web App**.

You'll do this once (about 5 minutes).

---

## Step 1 — Create the Google Sheet

1. Go to <https://sheets.google.com> and create a new blank spreadsheet.
2. Name it anything (e.g. **Nova Leads**).
3. You don't need to add headers — the script creates them automatically.

## Step 2 — Add the script

1. In that sheet, click **Extensions → Apps Script**.
2. Delete any code shown in the editor.
3. Open the file **`google-apps-script.gs`** (in this project folder), copy
   **all** of it, and paste it into the editor.
4. Click the **💾 Save** icon.

## Step 3 — Deploy it as a Web App

1. Click **Deploy → New deployment**.
2. Click the ⚙️ gear next to "Select type" → choose **Web app**.
3. Set:
   - **Description:** `Nova contact form`
   - **Execute as:** **Me**
   - **Who has access:** **Anyone**   ← important
4. Click **Deploy**.
5. Click **Authorize access** and allow the permissions (choose your Google
   account → *Advanced* → *Go to project (unsafe)* → *Allow*. This warning is
   normal for your own scripts.)
6. Copy the **Web app URL**. It looks like:
   ```
   https://script.google.com/macros/s/AKfycb................/exec
   ```

## Step 4 — Paste the URL into the site

Open **`src/data/site.js`**, find the `contact` section, and paste your URL:

```js
contact: {
  ...
  formEndpoint: 'https://script.google.com/macros/s/AKfycb..../exec',
},
```

Save. That's it — submissions now land in your sheet. 🎉

---

## Test it

1. Open the URL from Step 3 in your browser — you should see
   `{"result":"ok","message":"Nova contact endpoint is live."}`.
2. Run the site (`npm run dev`), go to **Contact**, and submit the form.
3. Check your Google Sheet — a new row should appear.

## Columns saved

`submittedAt` · `name` · `email` · `service` · `message` · `page`

Want different columns? Edit the `COLUMNS` array at the top of
`google-apps-script.gs`, and the matching `URLSearchParams` in
`src/sections/ContactForm.jsx`, then **re-deploy** (Deploy → Manage
deployments → ✏️ Edit → *New version* → Deploy).

## Troubleshooting

- **No new row?** Make sure "Who has access" is **Anyone**, and that you
  pasted the `/exec` URL (not the `/dev` one).
- **Changed the script but nothing updates?** You must deploy a **new
  version** (Manage deployments → Edit → New version).
- **Want email alerts too?** Add this inside `doPost`, before the `return`:
  ```js
  MailApp.sendEmail('you@example.com', 'New enquiry from ' + params.name, params.message);
  ```
