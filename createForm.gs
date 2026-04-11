/**
 * American AI — Series A Application Form Builder
 * Run this script at https://script.google.com to create the form.
 * After running, the form URL will appear in the Execution Log.
 */
function createAmericanAIForm() {

  var form = FormApp.create('Apply for Series A Funding');
  form.setDescription(
    'As you fill out the form below, we encourage you to provide supporting evidence, ' +
    'like documentation and screenshots of dashboards, to help us better understand your company. ' +
    'You can share files with us by uploading them at the bottom of the application.'
  );
  form.setConfirmationMessage(
    'Thank you for applying. We will review your application and be in touch within 48 hours.'
  );
  form.setAllowResponseEdits(false);
  form.setCollectEmail(true);


  // ─────────────────────────────────────────────
  // SECTION 1 — Company Information
  // ─────────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('Company Information');

  form.addTextItem()
    .setTitle('Company name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Primary URL')
    .setHelpText('This should be the marketing landing page you use to describe your product and company.')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Provide a short, 1-2 minute video of all of the current founders, introducing yourselves and the product. Tell us about what you\'ve built and why it\'s great.')
    .setHelpText('Please focus on the founders here — this should be solely a video of you all talking, not a product demo. Please use either an unpublished YouTube upload or Google Drive video link.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Briefly describe what it is you do in 1-2 sentences.')
    .setRequired(true);


  // ─────────────────────────────────────────────
  // SECTION 2 — Current Founders
  // ─────────────────────────────────────────────
  form.addPageBreakItem()
    .setTitle('Current Founders')
    .setHelpText('Add information about each current founder of your company.');

  form.addSectionHeaderItem()
    .setTitle('Founder 1')
    .setHelpText('The first listed founder should be our primary point of contact for this application.');

  form.addTextItem()
    .setTitle('Full name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Email')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Ownership %')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Phone number')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Location')
    .setRequired(true);

  // Age dropdown 13–100
  var ageList = form.addListItem().setTitle('Age');
  var ageChoices = [];
  for (var age = 13; age <= 100; age++) {
    ageChoices.push(ageList.createChoice(String(age)));
  }
  ageList.setChoices(ageChoices);

  form.addTextItem()
    .setTitle('LinkedIn URL')
    .setRequired(true);

  form.addTextItem()
    .setTitle('X (Twitter)');

  form.addParagraphTextItem()
    .setTitle('In their own words, what\'s the most impressive thing they\'ve accomplished (generally, not necessarily related to this company)?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('What are their current responsibilities? Give more than a title — walk us through their role.')
    .setRequired(true);


  // ─────────────────────────────────────────────
  // SECTION 3 — Product Information
  // ─────────────────────────────────────────────
  form.addPageBreakItem()
    .setTitle('Product Information');

  form.addTextItem()
    .setTitle('Product URL')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Please provide us some quick instructions for best using your product. If an account is required, please create one for us and share the username and password here.')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Provide a short (~2-3 minute) demo video of your product, narrated by one or more of the founders.')
    .setHelpText('Walk us through the key features and unique aspects of your product. Please use either an unpublished YouTube upload or a Google Drive video link.');

  form.addParagraphTextItem()
    .setTitle('Describe your business — who are your customers? What value do you provide them? What role do you play in their lives/in their business? How do they think about what you do?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Who are your competitors? Be specific. What sets you apart from them? Why are you the right bet?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Why is your business defensible? What prevents future AI from simply cloning your product and selling it for a fraction of the cost?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Tell us about your team: how many people in engineering, GTM, support, and administration do you have? Outside of the founders, who are the leaders in your company? Please include LinkedIn profiles for each person you list.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Describe your tech stack, and the major components of your product.')
    .setRequired(true);


  // ─────────────────────────────────────────────
  // SECTION 4 — Growth and Goals
  // ─────────────────────────────────────────────
  form.addPageBreakItem()
    .setTitle('Growth and Goals');

  form.addParagraphTextItem()
    .setTitle('Describe and quantify your most important goals and targets for the next 6, 12, and 18 months. What does success look like at each stage?')
    .setHelpText('Numbers here really matter. You should know where you are credibly going, and have specific, quantified goals along the way.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('If we fast-forward 10 years and your company is worth $100B, what had to happen along the way to get there?')
    .setHelpText('Lots of businesses become big and successful, but never have a chance to become $100B companies. We\'re serious about this — why will you get there? Please provide your base assumptions, and bottoms-up numeric estimates.')
    .setRequired(true);


  // ─────────────────────────────────────────────
  // SECTION 5 — Valuation
  // ─────────────────────────────────────────────
  form.addPageBreakItem()
    .setTitle('Valuation')
    .setHelpText(
      'Standard Capital typically funds companies at valuations between $40 and $200 million ' +
      '(or higher in exceptional circumstances), and requires a minimum of 10% equity.\n\n' +
      'Think of your chosen valuation as the "bar" for acceptance: the higher the valuation, ' +
      'the higher the bar by which you\'ll be measured. A regret minimization framework could be ' +
      'helpful here: at what valuation does the regret of not being accepted by Standard Capital ' +
      'outweigh the regret of not choosing a higher valuation?\n\n' +
      'It\'s worth considering that comparing a Standard Capital valuation to a traditional VC offer ' +
      'is not apples-to-apples: an offer where a founder doesn\'t give up a board seat, gives just 10% ' +
      'to the lead investor, and includes entry into the Standard Capital network is about more than just money. ' +
      'If a founder is solely optimizing for the highest possible valuation and is ambivalent about the other ' +
      'terms, Standard Capital is likely not the best fit.\n\n' +
      'If Standard Capital leads your Series A, you have the option of making the total round size higher ' +
      'from pro rata investments from your existing investors, or by adding other new investors.'
    );

  form.addParagraphTextItem()
    .setTitle('This application requests that Standard Capital make a lead investment of $__M on a $__M post-money valuation.')
    .setHelpText('Please fill in both dollar amounts in your response.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Please explain why you\'re seeking this valuation. Include the total amount you\'d like to raise in this round.')
    .setRequired(true);


  // ─────────────────────────────────────────────
  // SECTION 6 — Revenue
  // ─────────────────────────────────────────────
  form.addPageBreakItem()
    .setTitle('Revenue');

  form.addParagraphTextItem()
    .setTitle('How many active users or customers do you have? How many are paying? Who is paying you the most, and how much do they pay you?')
    .setRequired(true);

  form.addSectionHeaderItem()
    .setTitle('Please provide trailing 12 month revenue, broken out by month.')
    .setHelpText('Use net revenue and not GMV. The most recent month (March 2026) can be left blank if you don\'t have finalized numbers yet.');

  var revenueMonths = [
    'March 2025', 'April 2025', 'May 2025', 'June 2025',
    'July 2025', 'August 2025', 'September 2025', 'October 2025',
    'November 2025', 'December 2025', 'January 2026', 'February 2026', 'March 2026'
  ];
  revenueMonths.forEach(function(month, i) {
    var item = form.addTextItem().setTitle('Net Revenue — ' + month + ' ($)');
    if (i < revenueMonths.length - 1) item.setRequired(true); // March 2026 optional
  });

  form.addParagraphTextItem()
    .setTitle('What else should we know about your revenue and growth?')
    .setHelpText('If you include any numbers that refer to revenue or ARR, please clarify how much is fully contracted versus contingent on pilots, milestones, or other future events.');


  // ─────────────────────────────────────────────
  // SECTION 7 — Corporate Structure & Equity
  // ─────────────────────────────────────────────
  form.addPageBreakItem()
    .setTitle('Corporate Structure & Equity');

  form.addParagraphTextItem()
    .setTitle('Provide an exhaustive list of all corporate legal entities, including the state or country of formation and entity type.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Please detail your company\'s fundraising history to date. Include a line item for each investor, including their entity, name, type of funding (e.g., SAFE, convertible note, priced investment), check size, post-money valuation or cap, date, and any relevant terms or details.')
    .setHelpText('You can also upload your cap table, including an exhaustive list of SAFEs and other convertible instruments, under Supporting Documents below.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('What portion of your cap table is owned by investors, founders, and employees?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Has this company participated in Y Combinator or another accelerator program, or are any of the current founders alumni of an accelerator program?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Describe your current fundraise progress and plans. When will you make a decision?')
    .setRequired(true);


  // ─────────────────────────────────────────────
  // SECTION 8 — Runway
  // ─────────────────────────────────────────────
  form.addPageBreakItem()
    .setTitle('Runway');

  form.addTextItem()
    .setTitle('How much money do you have in the bank currently? ($)')
    .setRequired(true);

  form.addSectionHeaderItem()
    .setTitle('How much have you spent each month, for the past six months?');

  var spendMonths = [
    'September 2025', 'October 2025', 'November 2025',
    'December 2025', 'January 2026', 'February 2026', 'March 2026'
  ];
  spendMonths.forEach(function(month) {
    form.addTextItem()
      .setTitle('Monthly Spend — ' + month + ' ($)')
      .setRequired(true);
  });

  form.addParagraphTextItem()
    .setTitle('How long is your runway? Do you expect any substantial changes in spend in the next six months?')
    .setRequired(true);


  // ─────────────────────────────────────────────
  // SECTION 9 — Standard Questions
  // ─────────────────────────────────────────────
  form.addPageBreakItem()
    .setTitle('Standard Questions');

  form.addParagraphTextItem()
    .setTitle('Why are you interested in raising from Standard Capital?')
    .setRequired(true);

  form.addTextItem()
    .setTitle('How did you hear about Standard Capital?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('If you\'ve applied to Standard Capital in the past, what\'s different now? What are the most important things for us to know about your progress?')
    .setHelpText('Be specific and quantify.');


  // ─────────────────────────────────────────────
  // SECTION 10 — Supporting Documents
  // ─────────────────────────────────────────────
  form.addPageBreakItem()
    .setTitle('Supporting Documents')
    .setHelpText(
      'You do not need to create a pitch deck, but we are happy to review one if you have it. ' +
      'It\'s helpful to also upload screenshots of your internal dashboards, your cap table, and any ' +
      'other materials you think will support your application and help us evaluate your company.'
    );

  form.addFileUploadItem()
    .setTitle('Click to upload or drag and drop')
    .setHelpText('PDF, Word, Excel, PowerPoint, images, or videos up to 50MB')
    .setMaxFiles(10)
    .setMaxFileSize(52428800); // 50 MB in bytes


  // ─────────────────────────────────────────────
  // DONE — log URLs
  // ─────────────────────────────────────────────
  var publishedUrl = form.getPublishedUrl();
  var editUrl      = form.getEditUrl();

  Logger.log('✅ Form created!');
  Logger.log('📋 Published (share this) URL: ' + publishedUrl);
  Logger.log('✏️  Editor URL:                 ' + editUrl);

  // Show a popup with the URL
  var ui = SpreadsheetApp.getUi ? SpreadsheetApp.getUi() : null;
  // (If running standalone, the URL will appear in the log above)

  return publishedUrl;
}
