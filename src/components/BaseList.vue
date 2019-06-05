<script lang="ts">
import Vue from 'vue'
export default abstract class BaseList extends Vue {
  public abstract getList(...argv: any): Promise<any[]>
}
</script>
