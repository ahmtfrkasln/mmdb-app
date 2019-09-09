<template>
    
    <div class="">
        <div class="modal fade" id="video-player" tabindex="-1" role="dialog" aria-labelledby="video-playerTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="video-playerTitle">{{title}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid text-center">
                            <template v-if="videoKey">
                                <iframe width="800" height="450" :src=getVideoPath ></iframe>
                            </template>

                            <template v-if="!videoKey">
                                <p class="text-warning">Video link is not exist</p>
                            </template>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
    computed:{
        getVideoPath(){
            return "https://www.youtube.com/embed/" + this.videoKey + "?autoplay=1";
        }
    }
}
</script>