import { CustomTypeOptions } from 'react-i18next';

const resources: CustomTypeOptions['resources'] = {
  title: 'YouChoose AI',
  common: {
    coming_soon: 'Coming soon',
    empty_list: 'No {{resource}} found.',
    empty_string: '',
  },
  actions: {
    popup_bootstrap: 'Bootstrap',
    add: 'Add',
    copied: 'Copied!',
    drag_drop_recommendations:
      'Drag and drop to change the order of appearance',
    manage_recommendations: 'Manage recommendations',
    link_channel: 'Link channel',
    unlink_channel: 'Unlink channel',
    delete: 'Delete',
    clear: 'Clear',
    editThisVideo: 'Edit this video',
    importVideos: 'Import videos',
    addToCurrentVideo: 'Add to current video',
    compare: 'Compare',
    related: 'Related',
    next: 'Next',
    verify_channel: 'Verify',
    generate_keypair: 'Generate keypair',
    refresh_keypair: 'Refresh keypair',
    delete_keypair: 'Delete keypair',
    download_keypair: 'Download keypair',
    pull_creator_videos: 'Import your videos',
    update_creator_videos_list: 'Update your list of videos',
    copy_verification_code: 'Copy code',
    unlink_profile: 'Unlink profile',
    edit_access_token: 'Edit Access Token',
    download_access_token: 'Download Access Token',
    download: 'Download',
    move_recommendation_up: 'Move recommendation up',
    move_recommendation_down: 'Move recommendation down',
    remove_recommendation_from_video: 'Remove from current video',
    manage_tokens: 'Manage tokens',
    reset_settings: 'Reset settings',
    reload_extension: 'Reload extension',
  },
  errors: {
    an_error_occurred: 'An error occurred',
  },
  routes: {
    lab_title: 'LAB - Choose the Recommendations on Your Videos',
    lab_title_short: 'LAB',
    lab_subtitle: 'Click on one of your videos below to pick and order the recommendations you want to display in the side bar. Your content, your choice!',
    lab_edit_subtitle: 'Paste a link in the grey box below to add it to the recommendations of this video. You can add recommendations towards any website!',
    statistics: 'Statistics',
    settings: 'Settings',
    link_account: 'Authenticate your Channel to Choose Recommendations',
  },
  account: {
    channel: 'Your channel URL or ID',
  },
  creator: {
    title: 'Creator',
  },
  hide_all: {
    title: 'Hide All',
  },
  link_account: {
    title: 'Authenticate your YouTube channel.',
    subtitle: 'Authenticate the channel you own with this 1 min procedure to start choosing the recommendations on your videos.',
    label: 'Authenticate your YouTube channel to start choosing your recommendations',
    copy_verification_key: 'Copy and paste this unique key in your channel\'s description',
    verification_code_hint:
      "Click <1>here to access to your YouTube Studio</1> and edit your channel description. Just paste the link anywhere in it and click the Publish button on the top right. You can remove the code from your channel's description after the verification is finished.",
    paste_channel_url: 'Paste your YouTube Channel\'s URL or ID:',
    verification_failed: 'Oops, the channel authentication failed!',
    verification_failed_hint: "Please double-check that you have published the code in your channel's description and try again.",
    go_back_to_step_one_hint: 'If the verification keeps failing, <1>go back to step one</1> and make sure you have pasted the correct URL of your YouTube channel.',
  },
  youtube: {
    title: 'Youtube',
  },
  recommendations: {
    added_to_video_title: 'Recommendations added',
    by_creator_title: "Author's recommendations",
    total: 'Total recommendations',
    url: 'Recommendation url',
    yours: 'Your recommendations',
    no_items: 'Recommendations will appear here once added!',
    add_to_video: 'Add a recommendation to this video',
    url_placeholder: 'https://youtube.com/watch?v=xxxxx',
    url_helper_text: 'Insert a link',
  },
  dashboard: { title: 'Dashboard' },
  popup: { version: 'version {{version}} build {{data}}' },
  statistics: {
    title: 'Statistics',
    subtitle: 'Statistics computed with resources from other users',
    recommendability_score_title: 'Recommendability Score',
    recommendability_score_subtitle:
      'Where your videos appears as recommended?',
    total_views: 'Total Views',
    total_recommendations: 'Total Recommendations',
    evidences_title: 'Evidences',
    notifications_title: 'Notifications',
    top_n_cc_related_to_your_channel:
      'Top {{count}} CC related to your channel',
    advertising_connected_to_your_videos:
      'Advertising connected to your videos',
  },
  videos: {
    no_results: 'No videos found.',
    no_selected: 'No video selected',
    no_video_id: 'No video id found',
  },
  settings: {
    contentCreatorRecommendationLabel: 'Content Creators',
    contentCreatorRecommendationHint: 'See suggestions by real authors',
    communityRecommendationsLabel: 'Community',
    communityRecommendationsHint: 'Coming soon 🌻',
    contributeToIndependentStatsLabel: 'Independent stats',
    contributeToIndependentStatsHint:
      'Donate anonymously what Youtube recommends and advertises you',
    contributeToIndependentStatsShowUILabel: 'UI highlight for donation',
    contributeToIndependentStatsShowUIHint:
      'Highlight the UI of collected and donated elements',
    api_list_title: 'API List',
    encrypted_contributions_private_key:
      'You can download your private key in dashboard.',
    keypair_passphrase: 'Key pair passphrase',
    keypair_private_key: 'Key pair secret key',
    keypair_public_key: 'Key pair public key',
    keypair_title: 'Keypair for independent contribution',
    access_token_title: 'You Access Token',
    access_token: 'Access Token',
  },
  ytVideoPage: {
    firstTab: 'Creator Recommendations',
    secondTab: 'Community Recommendations',
    thirdTab: 'Youtube Recommendations',
  },
};

export default resources;
