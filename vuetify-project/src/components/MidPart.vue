<template>
<div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative" class="mt-16">
              <h1 class="text-yellow" >Hello,</h1>
              <h1 class="text-yellow">I'M Minion Lover</h1>
              <span class="text-yellow">Web Designer & Developer</span><br />
            </div>
          </v-col>
          <v-col cols="2">
          </v-col>
          <v-col cols="5">
            <div>
              <v-img src="https://s7.orientaltrading.com/is/image/OrientalTrading/14101093?$PDP_VIEWER_IMAGE$" contain max-height="300"></v-img>
            </div>
          </v-col>
        </v-row>
        <hr class="featurette-divider">
      </div>
      <v-col cols="12" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg">
                <v-img src="data:image/jpeg;base64,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" max-height="300" class=""></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h3 class="mt-16">About Minions</h3>
              <div style="width: 120px">
                <v-slider
                  v-model="slider2"
                  color="yellow"
                  label="track-color"
                ></v-slider>
              </div>
              <h3 class="mt-n4">I Am a Minion researcher</h3>
              <p class="text-grey">
                Minions are an all-male species of fictional yellow creatures that appear in Illumination's Despicable Me franchise. They are characterized by their childlike behavior and their language, which is largely unintelligible.
              </p>
              <br />
              <v-btn tile dark color="yellow" class="mt-4">
                Download Banana
              </v-btn>
            </v-col>
          </v-row>
          <hr class="featurette-divider">
        </div>
      </v-col>
      <div class="text-center mt-4">
        <h2>What we want to know!</h2>
      </div>
      <v-col cols="12" class="padd" id="portfolio">
        <div class="first" id="project">
          <v-row>
            <v-col cols="12">
              <div class="child">
                <h1 class="ml-3 mt-4">Mini?</h1>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Are Minions small or was large and get small?
                </p>
                <br />
              </div>
              <div class="child">
                
                <h1 class="ml-3 mt-4">Large?</h1>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Are minions Large? was small and get large?
                </p>
                <br />
              </div>
              <div class="child">
                <h1 class="ml-3 mt-4">Dick?</h1>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Dose minions have dick?
                </p>
                <br />
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-col>  
      <v-col cols="12" id="biog">
        <div class="hire">
          <v-row>
            <v-col cols="12" sm="8">
              <h1 class="mt-9">Hire me ifu want to know</h1>
              <p class="text-grey">
                I like minions, so i smart, so i can do job!
              </p>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn color="#FBDF7E" class="mt-15">Hire Me Pls...</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
</template>
<script>
export default {
name: 'MidPart',
}
</script>