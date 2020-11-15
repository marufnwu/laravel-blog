<template>
	<div>
		<div class="content">
			<div class="container">
					
				<!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
				<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
					<p class="_title0">All Tags <Button  @click="isEditMode=false, data.tagName='', addModal=true"><Icon type="md-add-circle" />Add Tag</Button></p>

					<div class="_overflow _table_div">
						<table class="_table">
								<!-- TABLE TITLE -->
							<tr>
								<th>ID</th>
								<th>Tag Name</th>
								<th>Created At</th>
								<th>Action</th>
							</tr>
								<!-- TABLE TITLE -->


								<!-- ITEMS -->
							<tr v-for="(tag, i) in tags" :key="i" v-if="tags.length">
								<td>{{tag.id}}</td>
								<td class="_table_name">{{tag.tagName}}</td>
								<td>{{tag.created_at}}</td>
								<td>
									<Button type="info" size="small" @click="showEditModal(tag), editIndex=i">Edit</Button>
									<Button type="error" size="small" @click="deletetag(tag, i)" :loading="tag.isDeleting">Delete</Button>
								</td>
							</tr>
								<!-- ITEMS -->



						</table>
					</div>
				</div>


				
				<!-- Tag adding modal -->
				 <Modal
					v-model="addModal"
					title="Add Tag">
					<Input v-model="data.tagName" placeholder="Enter something..." style="width: 300px" />
					<div slot="footer">
						<Button type="default" @click="addModal=false, data.tagName=''">Close</Button>
						<Button type="primary" @click="addtag" :disabled="isAdding" :loading='isAdding'>{{isEditMode?"Update":isAdding? "Adding..": "Add Tag"}}</Button>
					</div>
				</Modal>

			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			data:{
				id:0,
				tagName:'',
			},
			addModal : false,
			isAdding: false,
			tags: [],
			isEditMode : false,
			editIndex : -1,
		}
	},
	methods:{
		async addtag(){
			//if(this.data.tagName.trim()=='') return this.error('Tag Name Is Required');
			if(this.isEditMode){
				this.editTag();
				return;
			}
			const res = await this.callApi('post', '/app/create_tag', this.data);

			if(res.status==201){
				this.success("Tag has been added successfully!");
				this.addModal = false;
				this.tags.unshift(res.data)
				this.data.tagName = ''
			}else{
				if(res.status==422){
					if(res.data.errors.tagName)
						this.error(res.data.errors.tagName)	
				}else{
					this.error("Something went wrong.")
				}
			}
		},
		showEditModal(tag){
			this.isEditMode = true;
			this.data.tagName = tag.tagName;
			this.data.id = tag.id
			this.addModal = true;
		},

		async editTag(){
			const res = await this.callApi('post', '/app/edit_tag', this.data);
			
			if(res.status==200){
				if(this.editIndex>-1 && this.tags.length>=this.editIndex){
					this.success("Tag has been updated successfully!");
					this.addModal = false;
					this.tags[this.editIndex]= res.data
				}
			}else{
				if(res.status==422){
					if(res.data.errors.tagName)
						this.error(res.data.errors.tagName)	
				}else{
					this.error("Something went wrong.")
				}
			}
		},

		async deletetag(tag, i){
			this.$set(tag,'isDeleting', true);
			const res = await this.callApi('post', "app/delete_tag", tag)
			
			if(res.status==200){
				if(res.data){
					this.success("Tag deleted successfully");
					this.tags.splice(i, 1)
				}
				else{
					this.$set(tag,'isDeleting', false);
					this.error("Something went wrong!");
				}
			}
		}
	},
	
	async created(){
		const res = await this.callApi('get', "app/get_tag")
		if(res.status==200){
			
			this.tags = res.data
		}else{
			this.error("Something went wrong.")
		}
	},

	
	
}
</script>