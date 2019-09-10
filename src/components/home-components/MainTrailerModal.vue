<template>

    <div>
        <div class="modal fade" id="video-player" tabindex="-1" role="dialog" aria-labelledby="video-playerTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div class="modal-content bg-dark text-white">
                    <div class="modal-header">
                        <h5 class="modal-title" id="video-playerTitle">{{title}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="text-danger">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid text-center">
                            <template v-if="videoKey">
                                <div class="embed-container">
                                    <iframe :src=getVideoPath() frameborder="0" allowfullscreen></iframe>
                                </div>
                            </template>

                            <template v-if="!videoKey">
                                <p class="text-warning">Video link is not exist</p>
                            </template>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="hideVideo()">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {required: true},
        videoKey: {required: true}
    },
    methods: {
        getVideoPath(){
            return "https://www.youtube.com/embed/" + this.videoKey + "?autoplay=1";
        },
        hideVideo(){
            this.videoKey = null;
        }
    }
}
</script>

<style scoped>
    .embed-container {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        max-width: 100%;
    }

    .embed-container iframe, .embed-container object, .embed-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
