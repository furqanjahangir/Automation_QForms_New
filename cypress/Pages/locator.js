var locators={

    fNameSel: '#mat-input-1',
    lNameSel:'#mat-input-2',
    address:'#mat-input-3',
    app:'#mat-input-4',
    addCode:'#mat-input-5',
    num:'#mat-input-6',
    email:'#mat-input-0',
    password:'#mat-input-1',
    login:':nth-child(4) > .full-width > .mat-button-wrapper',
    forgetlink:'form.ng-untouched > div.custom-vertical-spacer > a',
    errormessage:'.toast-title',
    ref:'#mat-input-8',
    userdemo:'.dropdown-toggle',
    navigation:'#app-navbar-collapse',
    viewform:':nth-child(1) > .panel > .bold > .panel-footer > .pull-left',
    createform:':nth-child(2) > .panel > .color-dark > .panel-footer > .pull-left',
    viewusrrole:':nth-child(3) > .panel > .bold > .panel-footer > .pull-left',
    userlist:':nth-child(4) > .panel > .bold > .panel-footer > .pull-left',
    forgetpswd:'#mat-input-2',
    logout:'.dropdown-menu > :nth-child(2) > a',
    successtoast:'.toast-title',
    sendemail:'.mat-button-wrapper',
    formmanage:'[fxlayoutalign="start"]',
    backbutton:'.back-btn',
    formbuilder:'[routerlink="/qforms/form-builder/0"] > div',
    createnewuser:'#button_add_user',
    rolelist:'[fxflex="20"]',
    newrole:'#button_add_user',
    userlistlabel:'[fxflex="40"]',
    billing:':nth-child(5) > .panel > .panel-heading',
    clientid:'.mat-sort-header-button',
    textcreateform:'h3',
    text2createform:'h4',
    uploadpf:'[fxlayout="row"] > :nth-child(2) > div',
    dragyouroption:'.font-16',
    plusicon:'.toggle-entry-add > .mat-button-wrapper > .material-icons',
    control:'#mat-tab-label-0-0 > .mat-tab-label-content',
    typography:'#headingTypography > .panel-title > a',
    heading:'#header > .col-md-10',
    paragraph:'#typoparagraph > .col-md-10',
    twocolumntext:'#twocolumntext > .col-md-10',
    canvas:'.font-16',
    imagetext:'#imagelefttext > .col-md-10' ,
    errorunreg:'.toast-title',
    toastmsg:'.toast-message',
    form_control:'#headingFormControls > .panel-title > .collapsed',
    text:'#textbox > .col-xs-10',
    number:'#number > .col-xs-10',



    //#Form Properties Locators
    form_properties_icon:'.mat-button-wrapper > .fa',
    form_name:'#propertiesGeneralCollapse > .panel-body > :nth-child(1) > .form-control',
    form_description:':nth-child(2) > .form-control',
    form_type_dropdown:':nth-child(3) > .form-control',
    url_redirection:':nth-child(4) > .toggle-switchy > .toggle',
    redirect_url:':nth-child(1) > .custom-vertical-spacer > .form-control',
    redirect_message:':nth-child(2) > .custom-vertical-spacer > .form-control',
    redirect_after_prompt:'#mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle',
    redirect_without_prompt:'#mat-radio-3 > .mat-radio-label > .mat-radio-label-content > small',

    url_redirection_questionnaire:':nth-child(6) > .toggle-switchy > .toggle',
    
    enable_save_resume_later:'.col-md-12.ng-star-inserted > .toggle-switchy > .toggle',
    enable_save_resume_later_emailsubject:'.custom-vertical-spacer > .form-control',
    enable_save_resume_later_showsytemusers:':nth-child(6) > .toggle-switchy > .label',
    
    enable_save_resume_later_onform_emaillink:'.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex',
    enable_save_resume_later_onform_submit_email:'[fxlayout="row"] > .mat-primary',
    
    
    
    enable_page_review:':nth-child(6) > .toggle-switchy',
    enable_page_review_page_title:':nth-child(7) > .form-control',
    enable_page_review_page_description:':nth-child(8) > .form-control',
    enable_page_review_allow_edits:':nth-child(9) > .toggle-switchy > .label',
    enable_page_review_button_style:':nth-child(10) > .form-control',
    enable_page_review_submit_buttontext:':nth-child(11) > .form-control',
    enable_page_review_back_buttontext:':nth-child(12) > .form-control',
    enable_page_review_submit_button_imageurl:':nth-child(12) > .form-control',
    enable_page_review_back_button_imageurl:':nth-child(12) > .form-control',
   

    
    limit_one_entry_per_ip:':nth-child(7) > .toggle-switchy > .toggle',
    
    limit_entries:':nth-child(8) > .toggle-switchy > .toggle',
    limit_entries_count:':nth-child(9) > .form-control',

    enable_automatic_scheduling:':nth-child(9) > .toggle-switchy > .toggle',
    enable_automatic_scheduling_date_time:'.input-group > .form-control',

    date_format:':nth-child(10) > .form-control',
    date_format_questionnaire:':nth-child(11) > .form-control',
    enable_negative_marking:':nth-child(4) > .toggle-switchy > .toggle',
    show_timer:':nth-child(5) > .toggle-switchy > .toggle ',

    //#Form Canvas Locators
    save_form:'.example-button-row > .mat-primary',
    save_close_form:'.example-button-row > .mat-accent',
    close_form:'.example-button-row > .mat-warn',

   //Form Submission Mode Locators
    form_submit:'.col-md-12 > .btn',
    enable_page_review_form_reviewbutton:'.col-md-12 > .btn',
    enable_page_review_form_review_finalsubmit_button_editoff:'.btn > .fa',
    enable_page_review_form_review_back_textbutton:'.btn-warning',
    enable_page_review_form_review_finalsubmit_textbutton_editon:'.btn-primary',
   
    enable_page_review_form_review_back_imagebutton:'.pull-left',
    enable_page_review_form_review_finalsubmit_imagebutton_editon:'.pull-right',

    enable_save_resume_later_formsubmit:'.save-and-resume',
    form_redirect_confirm_ok:'.mat-raised-button',

    //#Form Manager Locators
    topmost_form:'tbody > :nth-child(1) > .cdk-column-label',
    form_action:':nth-child(1) > .cdk-column-action > .mat-menu-trigger',
    form_publish:'[fxlayout="row"] > .mat-primary',
}
export {locators}
