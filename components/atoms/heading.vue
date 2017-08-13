<!--
  Heading atom component
  //
  manages all level of heading and offers the following props
  //
  classes: String
  content: String (you can pipe html)
  fake: String one-of ['p', 'span']
  type: String one-of ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
 -->

 <template>
   <span v-if="fake === 'span'" :class="'heading-'+type + ' ' + classes" v-html="content"></span>
   <p v-else-if="fake === 'p'" :class="'heading-'+type + ' ' + classes" v-html="content"></p>
   <h1 v-else-if="type === 'h1'" :class="'heading-h1 ' + classes" v-html="content"></h1>
   <h2 v-else-if="type === 'h2'" :class="'heading-h2' + classes" v-html="content"></h2>
   <h3 v-else-if="type === 'h3'" :class="'heading-h3 ' + classes" v-html="content"></h3>
   <h4 v-else-if="type === 'h4'" :class="'heading-h4 ' + classes" v-html="content"></h4>
   <h5 v-else-if="type === 'h5'" :class="'heading-h5 ' + classes" v-html="content"></h5>
   <h6 v-else-if="type === 'h6'" :class="'heading-h6 ' + classes" v-html="content"></h6>
 </template>


<script>
export default {
  name: 'heading',
  props: {
    classes: {
      type: String, default: ''
    },
    content: {
      type: String, default: ''
    },
    fake: {
      type: String, default: false
    },
    type: {
      type: String, default: 'h2', required: true
    }
  }
}
</script>

<style lang="sass">
@import "~assets/styles/_vars.scss"
@import "~assets/styles/lib/_mq.sass"


%heading
  margin: 0 0 $space
  font-family: $font-heading
  font-weight: inherit
  font-weight: 700
  line-height: 1.1

%heading-sans
  @extend %heading
  font-family: $font
  letter-spacing: 1px
  text-transform: uppercase
  +mq($bp-md)
    font-weight: 600

.heading-h1
  @extend %heading
  font-size: $fs-xs-h1
  +mq($bp-sm)
    font-size: $fs-sm-h1
  +mq($bp-md)
    font-size: $fs-md-h1
  +mq($bp-lg)
    font-size: $fs-md-h1

.heading-h2
  @extend %heading
  font-size: $fs-xs-h2
  +mq($bp-sm)
    font-size: $fs-sm-h2
  +mq($bp-md)
    font-size: $fs-md-h2
  +mq($bp-lg)
    font-size: $fs-md-h2

.heading-h3,
.heading-h4
  @extend %heading
  font-size: $fs-xs-h3
  +mq($bp-sm)
    font-size: $fs-sm-h3
  +mq($bp-md)
    font-size: $fs-md-h3
  +mq($bp-lg)
    font-size: $fs-md-h3

.heading-h5
  @extend %heading-sans
  font-size: $fs-xs-h5
  +mq($bp-sm)
    font-size: $fs-sm-h5
  +mq($bp-md)
    font-size: $fs-md-h5


.heading-h6
  @extend %heading-sans
  font-size: $fs-xs-h6
  +mq($bp-sm)
    font-size: $fs-sm-h6
  +mq($bp-md)
    font-size: $fs-md-h6

span.heading-h1,
span.heading-h2,
span.heading-h3,
span.heading-h4,
span.heading-h5,
span.heading-h6
  vertical-align: middle

</style>
