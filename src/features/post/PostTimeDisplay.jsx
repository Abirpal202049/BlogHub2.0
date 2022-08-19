import React from 'react'
import {formatDistanceToNow, parseISO} from 'date-fns'


/* 
* parseISO
! Convert string '2014-02-11T11:30:30' to date:

const result = parseISO('2014-02-11T11:30:30')

=> Tue Feb 11 2014 11:30:30
*/

/* 
*formatDistanceToNow
!If today is 1 January 2015, what is the distance to 2 July 2014?

const result = formatDistanceToNow(
  new Date(2014, 6, 2)
)

=> '6 months'
*/

const PostTimeDisplay = ({timestamp}) => {
  let timeago = '';
  if(timestamp){
    const date = parseISO(timestamp);
    timeago = formatDistanceToNow(date, {includeSeconds : true});
  }

  return (
    <span>{timeago} ago</span>
  )
}

export default PostTimeDisplay