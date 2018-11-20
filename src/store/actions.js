/**actions   变化管理
 *   
 * @authors Your Name (you@example.org)
 * @date    2018-11-15 18:21:17
 * @version $Id$
 */

export default {
	changeCity(ctx,city){
		ctx.commit('changeCity',city)
	}
}
