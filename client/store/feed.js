import { axios } from "axios";

/**
 * ACTION TYPES
 */

const GET_BIT_FEED = 'GET_BIT_FEED';
const GET_BLOG_FEED = 'GET_BLOG_FEED';
const GET_BLOG_POSTS = 'GET_BLOG_POSTS';

/**
 * INITIAL STATE
 */
const posts = []

/**
 * ACTION CREATORS
 */

const getBitFeed = bitFeed => ({type: GET_BIT_FEED, bitFeed})
const getBlogFeed = blogFeed => ({type: GET_BLOG_FEED, blogFeed})
